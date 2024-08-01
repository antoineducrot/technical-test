const positions = {
  foo: 'foo',
  none: 'none',
  bar: 'bar',
  foobar: 'foobar',
  buy: 'buy',
  sell: 'sell'
} as const

const actions = {
  moving: 'moving',
  miningFoo: 'miningFoo',
  miningBar: 'miningBar',
  creatingFooBar: 'creatingFoobar',
  buyingRobot: 'buyingRobot',
  sellingFoobar: 'sellingFoobar',
  none: 'none'
} as const

type Position = (typeof positions)[keyof typeof positions]
type Action = (typeof actions)[keyof typeof actions]

export type { Action, Position }
export { actions, positions }
