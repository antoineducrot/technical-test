import tk from 'terminal-kit'
import { v4 as generateId } from 'uuid'

import { config } from './config'
import { type Factory } from './Factory'
import { type Action, actions, type Position, positions } from './Position'
import { type Stock } from './Stock'
import { between } from './utils'

class Robot {
  static count = 1
  private position: Position = positions.none
  private movingTo: Position = positions.none
  private action: Action = actions.none
  private readonly id: number

  constructor(
    private readonly stock: Stock,
    private readonly factory: Factory
  ) {
    this.id = Robot.count

    Robot.count++
  }

  public getPosition() {
    return this.position
  }

  public getMovingTo() {
    return this.movingTo
  }

  public getAction() {
    return this.action
  }

  public moveTo(position: Position) {
    if (position !== this.position && this.action === actions.none) {
      this.action = actions.moving
      this.movingTo = position
      this.position = positions.none
      this.print(`Robot n°${this.id} is moving to ${position}`)

      setTimeout(() => {
        this.print(`Robot n°${this.id} moved to ${position}`)

        this.action = actions.none
        this.movingTo = positions.none
        this.position = position
      }, 5000 / config.timeMultiplier)
    }
  }

  public mineFoo() {
    if (this.position === positions.foo && this.action === actions.none) {
      this.action = actions.miningFoo
      this.print(`Robot n°${this.id} is mining foo`)

      setTimeout(() => {
        this.print(`Robot n°${this.id} mined 1 foo`)

        this.stock.stockFoo(generateId())
        this.action = actions.none
      }, 1000 / config.timeMultiplier)
    }
  }

  public mineBar() {
    if (this.position === positions.bar && this.action === actions.none) {
      this.action = actions.miningBar
      this.print(`Robot n°${this.id} is mining bar`)

      setTimeout(
        () => {
          this.print(`Robot n°${this.id} mined 1 bar`)

          this.stock.stockBar(generateId())
          this.action = actions.none
        },
        between(500 / config.timeMultiplier, 2000 / config.timeMultiplier)
      )
    }
  }

  public createFoobar() {
    if (this.position === positions.foobar && this.action === actions.none) {
      const foo = this.stock.takeFoo()
      const bar = this.stock.takeBar()

      if (foo !== undefined && bar !== undefined) {
        this.print(`Robot n°${this.id} is creating foobar`)

        this.action = actions.creatingFooBar

        setTimeout(() => {
          if (between(0, 100) >= 60) {
            this.stock.stockBar(bar)
            this.print(`Robot n°${this.id} failed to create foobar`)
          } else {
            this.print(`Robot n°${this.id} succeed to create foobar`)

            this.stock.stockFoobar(bar + foo)
          }

          this.action = actions.none
        }, 2000 / config.timeMultiplier)
      }
    }
  }

  public sellFooBar(nb: number) {
    if (
      this.position === positions.sell &&
      this.action === actions.none &&
      this.stock.getNumberFoobar() >= nb &&
      nb <= 5
    ) {
      this.action = actions.sellingFoobar
      for (let i = 0; i < nb; i++) {
        this.stock.takeFoobar()
      }

      this.print(`Robot n°${this.id} is selling ${nb} foobar`)

      setTimeout(() => {
        this.print(`Robot n°${this.id} sold ${nb} foobar`)

        this.stock.stockMoney(nb)
        this.action = actions.none
      }, 10000 / config.timeMultiplier)
    }
  }

  public buyRobot() {
    if (
      this.position === positions.buy &&
      this.action === actions.none &&
      this.stock.getMoney() >= 3 &&
      this.stock.getNumberFoo() >= 6
    ) {
      this.action = actions.buyingRobot

      this.stock.takeMoney(3)
      for (let i = 0; i < 6; i++) {
        this.stock.takeFoo()
      }

      setTimeout(() => {
        const robot = new Robot(this.stock, this.factory)

        this.print(`Robot n°${this.id} bought new robot`)

        this.factory.addRobot(robot)
        this.action = actions.none
      }, 0)
    }
  }

  private print(str: string): void {
    tk.terminal.moveTo(1, this.id + 6)
    tk.terminal.eraseLineAfter()
    tk.terminal(str)
  }
}

export { Robot }
