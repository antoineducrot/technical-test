import 'reflect-metadata'

import { type Store } from '.'
import { type Permission } from './permission/permission.constant'

function Restrict(permission: Permission = 'none') {
  return function <T extends Store>(target: T, key: string) {
    Reflect.defineMetadata('permission', permission, target, key)
  }
}

export { Restrict }
