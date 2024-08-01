/* eslint-disable max-depth */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-promise-executor-return */

import tk from 'terminal-kit'

import { positions } from './Position'
import { Robot } from './Robot'
import { Stock } from './Stock'

class Factory {
  private readonly stock: Stock = new Stock()
  private readonly robots: Robot[] = []

  constructor() {
    this.robots.push(new Robot(this.stock, this), new Robot(this.stock, this))
  }

  public async start() {
    tk.terminal.clear()

    while (this.isSuccess()) {
      if (this.stock.getMoney() >= 3 && this.stock.getNumberFoo() >= 6) {
        if (!this.robotOnBuying()) {
          for (const robot of this.robots) {
            if (robot.getPosition() !== positions.buy) {
              robot.moveTo(positions.buy)
              break
            }
          }
        }

        this.robots.forEach((robot) => {
          robot.buyRobot()
        })
      }

      if (this.stock.getNumberFoobar() >= 3 && this.stock.getMoney() < 3) {
        if (!this.robotOnSelling()) {
          for (const robot of this.robots) {
            if (robot.getPosition() !== positions.sell) {
              robot.moveTo(positions.sell)
              break
            }
          }
        }

        this.robots.forEach((robot) => {
          robot.sellFooBar(3)
        })
      }

      if (
        this.stock.getNumberFoobar() < 3 &&
        this.stock.getNumberBar() >= 3 &&
        this.stock.getNumberFoo() >= 9
      ) {
        if (!this.robotOnCreatingFoobar()) {
          for (const robot of this.robots) {
            if (robot.getPosition() !== positions.foobar) {
              robot.moveTo(positions.foobar)
              break
            }
          }
        }

        this.robots.forEach((robot) => {
          robot.createFoobar()
        })
      }

      if (this.stock.getNumberFoo() < 9) {
        this.robots.forEach((robot) => {
          robot.moveTo(positions.foo)
        })
        this.robots.forEach((robot) => {
          robot.mineFoo()
        })
      }

      if (this.stock.getNumberBar() < 3) {
        this.robots.forEach((robot) => {
          robot.moveTo(positions.bar)
        })
        this.robots.forEach((robot) => {
          robot.mineBar()
        })
      }

      await this.tick()
    }
  }

  public isSuccess(): boolean {
    return this.robots.length < 30
  }

  public addRobot(robot: Robot): void {
    this.robots.push(robot)
  }

  private robotOnBuying(): boolean {
    for (const robot of this.robots) {
      if (
        robot.getMovingTo() === positions.buy ||
        robot.getPosition() === positions.buy
      ) {
        return true
      }
    }

    return false
  }

  private robotOnSelling(): boolean {
    for (const robot of this.robots) {
      if (
        robot.getMovingTo() === positions.sell ||
        robot.getPosition() === positions.sell
      ) {
        return true
      }
    }

    return false
  }

  private robotOnCreatingFoobar(): boolean {
    for (const robot of this.robots) {
      if (
        robot.getMovingTo() === positions.foobar ||
        robot.getPosition() === positions.foobar
      ) {
        return true
      }
    }

    return false
  }

  private async tick(): Promise<void> {
    this.print(`money: ${this.stock.getMoney()}`, 1)
    this.print(`foo: ${this.stock.getNumberFoo()}`, 2)
    this.print(`bar: ${this.stock.getNumberBar()}`, 3)
    this.print(`foobar: ${this.stock.getNumberFoobar()}`, 4)
    this.print(`robot: ${this.robots.length}`, 5)
    return new Promise<void>((resolve) => setTimeout(resolve, 0))
  }

  private print(str: string, y: number): void {
    tk.terminal.moveTo(1, y)
    tk.terminal.eraseLineAfter()
    tk.terminal(str)
  }
}

export { Factory }
