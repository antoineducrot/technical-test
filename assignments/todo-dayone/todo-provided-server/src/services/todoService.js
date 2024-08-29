import Todo from '../db/model/Todo'

const orderModifier = ({ orderBy, queryBuilder }) => {
  switch (orderBy) {
    case 'DATE_DESC':
      queryBuilder.orderBy('createdAt', 'desc')
      break
    case 'DATE_ASC':
      queryBuilder.orderBy('createdAt', 'asc')
      break
    default:
  }
}

const isDoneModifier = ({ isDone, queryBuilder }) => {
  if (isDone === undefined) return
  queryBuilder.where('isDone', isDone)
}

const typeModifier = ({ types, queryBuilder }) => {
  if (types === undefined) return
  queryBuilder.whereIn('type', types)
}

const findById = (id) => Todo.query().findById(id)

const findAll = ({ orderBy, filters: { isDone, types } = {} }) =>
  Todo.query()
    .modify((queryBuilder) => isDoneModifier({ isDone, queryBuilder }))
    .modify((queryBuilder) => typeModifier({ types, queryBuilder }))
    .modify((queryBuilder) => orderModifier({ orderBy, queryBuilder }))

const updateStatusById = ({ id, isDone }) =>
  Todo.query().patchAndFetchById(id, { isDone })

export { findAll, findById, updateStatusById }
