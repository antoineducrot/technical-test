import { Model } from 'objection'

import knex from '../index.js'

Model.knex(knex)

class Todo extends Model {
  static get tableName() {
    return 'todo'
  }
}

// eslint-disable-next-line import/no-default-export
export default Todo
