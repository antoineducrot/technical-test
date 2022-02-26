const Positions = {
  Foo: 'foo',
  None: 'none',
  Bar: 'bar',
  Foobar: 'foobar',
  Buy: 'buy',
  Sell: 'sell',
} as const;

const Actions = {
  Moving: 'moving',
  MiningFoo: 'miningFoo',
  MiningBar: 'miningBar',
  CreatingFooBar: 'creatingFoobar',
  BuyingRobot: 'buyingRobot',
  SellingFoobar: 'sellingFoobar',
  None: 'none',
} as const;

type Position = typeof Positions[keyof typeof Positions];
type Action = typeof Actions[keyof typeof Actions];

export type {Action, Position};
export {Actions, Positions};
