import { lazy } from './lazy'
import { Store } from './store'
import { Restrict } from './store/restrict.decorator'
import { type UserStore } from './userStore'

export class AdminStore extends Store {
  @Restrict('r')
  public user: UserStore
  @Restrict()
  name = 'John Doe'
  @Restrict('rw')
  getCredentials = lazy(() => {
    const credentialStore = new Store()

    credentialStore.writeEntries({ username: 'user1' })

    return credentialStore
  })

  constructor(user: UserStore) {
    super()

    this.defaultPolicy = 'none'

    this.user = user
  }
}
