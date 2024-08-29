const TodoOrderings = {
  DATE_DESC: 'DATE_DESC',
  DATE_ASC: 'DATE_ASC'
} as const

type TodoOrdering = (typeof TodoOrderings)[keyof typeof TodoOrderings]

export { type TodoOrdering, TodoOrderings }
