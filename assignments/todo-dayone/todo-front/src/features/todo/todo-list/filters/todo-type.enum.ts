const TodoTypes = {
  RH: 'RH',
  Tech: 'Tech',
  Marketing: 'Marketing',
  Communication: 'Communication'
} as const

type TodoType = (typeof TodoTypes)[keyof typeof TodoTypes]

export { type TodoType, TodoTypes }
