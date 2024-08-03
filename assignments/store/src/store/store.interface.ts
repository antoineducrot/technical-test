import { Store } from '.'
import {
  isJsonPrimitive,
  type JsonArray,
  type JsonObject,
  type JsonPrimitive
} from './json-types'
import { type Permission } from './permission/permission.constant'

type StoreResult = Store | JsonPrimitive | undefined

function isStoreResult(value: unknown): value is StoreResult {
  return value instanceof Store || isJsonPrimitive(value) || value === undefined
}

type StoreValue = JsonObject | JsonArray | StoreResult | (() => StoreResult)

/**
 * Use with care, as it may not be the best way to check if a value is a function that returns a StoreResult.
 */

type IStore = {
  defaultPolicy: Permission

  allowedToRead(key: string): boolean

  allowedToWrite(key: string): boolean

  read(path: string): StoreResult

  write(path: string, value: StoreValue): StoreValue

  writeEntries(entries: JsonObject): void

  entries(): JsonObject
}

export { isStoreResult, type IStore, type StoreResult, type StoreValue }
