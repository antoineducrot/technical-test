const Orderings = {
  DATE_DESC: 'DATE_DESC',
  DATE_ASC: 'DATE_ASC'
} as const

type Ordering = (typeof Orderings)[keyof typeof Orderings]

export { type Ordering, Orderings }
