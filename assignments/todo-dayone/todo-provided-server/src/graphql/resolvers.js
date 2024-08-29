import { findAll, findById, updateStatusById } from '../services/todoService'

const Query = {
  getTodoList: (_, { orderBy, filters }) =>
    findAll({
      orderBy,
      filters
    }),

  getTodoById: (_, { id }) => findById(id)
}

const Mutation = {
  updateTodoStatusById: (_, { id, isDone }) => updateStatusById({ id, isDone })
}

export { Mutation, Query }
