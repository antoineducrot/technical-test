import 'reflect-metadata'

import { isJsonObject, type JsonObject } from './json-types'
import { type Permission } from './permission.type'
import { Restrict } from './restrict.decorator'
import {
  isStoreResult,
  type IStore,
  type StoreResult,
  type StoreValue
} from './store.interface'

const readPermissions: Permission[] = ['rw', 'r']
const writePermissions: Permission[] = ['rw', 'w']

// Could add restrictions on defined properties and methods
class Store implements IStore {
  [key: string]: unknown

  defaultPolicy: Permission = 'rw'

  @Restrict()
  read(path: string): StoreResult {
    if (!path.length) return this

    const [storeKey, nestedKey] = this.extractKey(path)

    this.checkReadPermission(storeKey)

    const storeItem = this.resolve(this[storeKey])

    if (storeItem instanceof Store) return storeItem.read(nestedKey)

    return storeItem
  }

  @Restrict()
  allowedToRead(path: string): boolean {
    try {
      this.read(path)
      return true
    } catch {
      return false
    }
  }

  @Restrict()
  // Don't really know how array should be handled so I just return the value (i could treat it as a store)
  write(path: string, value: StoreValue): StoreValue {
    const [storeKey, nestedKey] = this.extractKey(path)

    if (nestedKey.length) {
      this.checkReadPermission(storeKey)

      if (!(this[storeKey] instanceof Store)) this[storeKey] = new Store()

      // This cast is safe because we know that this[storeKey] is a Store
      return (this[storeKey] as Store).write(nestedKey, value)
    }

    this.checkWritePermission(storeKey)

    if (isJsonObject(value)) {
      const store = new Store()

      store.writeEntries(value)

      this[storeKey] = store
    } else this[storeKey] = value

    return value
  }

  @Restrict()
  allowedToWrite(path: string): boolean {
    const [storeKey, nestedKey] = this.extractKey(path)

    const storeItem = this.resolve(this[storeKey])

    if (
      this.hasReadPermission(storeKey) &&
      storeItem instanceof Store &&
      nestedKey.length
    )
      return storeItem.allowedToWrite(nestedKey)

    return this.hasWritePermission(storeKey)
  }

  @Restrict()
  entries(): JsonObject {
    const entries: JsonObject = {}

    Object.entries(this).forEach(([key, value]) => {
      if (!this.hasReadPermission(key)) return

      const entry = this.resolve(value)

      if (entry === undefined) return

      if (entry instanceof Store) entries[key] = entry.entries()
      else entries[key] = entry
    })

    return entries
  }

  @Restrict()
  writeEntries(entries: JsonObject): void {
    const keys = Object.keys(entries)

    for (const key of keys) this.write(key, entries[key])
  }

  @Restrict()
  private extractKey(path: string): [string, string] {
    const index = path.indexOf(':')

    return index === -1
      ? [path, '']
      : [path.slice(0, index), path.slice(index + 1)]
  }

  @Restrict()
  private getPermission(key: string): Permission {
    // Could use a type guard here instead of the 'as Permission' cast
    return (
      (Reflect.getMetadata('permission', this, key) as Permission) ??
      this.defaultPolicy
    )
  }

  @Restrict()
  private checkReadPermission(key: string): void {
    if (!this.hasReadPermission(key)) throw new Error('Permission denied.')
  }

  @Restrict()
  private checkWritePermission(key: string): void {
    if (!this.hasWritePermission(key)) throw new Error('Permission denied.')
  }

  @Restrict()
  private hasReadPermission(key: string): boolean {
    return readPermissions.includes(this.getPermission(key))
  }

  @Restrict()
  private hasWritePermission(key: string): boolean {
    return writePermissions.includes(this.getPermission(key))
  }

  @Restrict()
  private resolve(value: unknown): StoreResult {
    const next = this.isFunction(value) ? value() : value

    if (isStoreResult(next)) return next

    throw new Error('Data corrupted.')
  }

  // Use with care, as it may not be the best way to check if a value is a function that returns a StoreResult
  @Restrict()
  private isFunction(value: unknown): value is () => StoreResult {
    return typeof value === 'function'
  }
}

export { Store }
