import { Store } from './store'
import { Restrict } from './store/restrict.decorator'

export class UserStore extends Store {
  @Restrict('rw')
  name = 'John Doe'

  constructor() {
    super()

    this.defaultPolicy = 'rw'
  }
}
