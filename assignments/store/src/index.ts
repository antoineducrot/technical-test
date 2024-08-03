import 'reflect-metadata'

import { AdminStore } from './adminStore'
import { UserStore } from './userStore'

const u = new UserStore()

const a = new AdminStore(u)

console.log(a.allowedToWrite('getCredentials:user'))
