/* eslint-disable max-depth */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-promise-executor-return */

import {Positions} from './Position';
import {Robot} from './Robot';
import {Stock} from './Stock';

class Factory {
  private readonly stock: Stock = new Stock();
  private readonly robots: Robot[] = [];

  constructor() {
    this.robots.push(new Robot(this.stock, this), new Robot(this.stock, this));
  }

  public async start() {
    while (this.isSuccess()) {
      if (this.stock.getMoney() >= 3 && this.stock.getNumberFoo() >= 6) {
        if (!this.robotOnBuying()) {
          for (const robot of this.robots) {
            if (robot.getPosition() !== Positions.Buy) {
              robot.moveTo(Positions.Buy);
              break;
            }
          }
        }

        this.robots.forEach(robot => {
          robot.buyRobot();
        });
      }

      if (this.stock.getNumberFoobar() >= 3 && this.stock.getMoney() < 3) {
        if (!this.robotOnSelling()) {
          for (const robot of this.robots) {
            if (robot.getPosition() !== Positions.Sell) {
              robot.moveTo(Positions.Sell);
              break;
            }
          }
        }

        this.robots.forEach(robot => {
          robot.sellFooBar(3);
        });
      }

      if (this.stock.getNumberFoobar() < 3 && this.stock.getNumberBar() >= 3 && this.stock.getNumberFoo() >= 9) {
        if (!this.robotOnCreatingFoobar()) {
          for (const robot of this.robots) {
            if (robot.getPosition() !== Positions.Foobar) {
              robot.moveTo(Positions.Foobar);
              break;
            }
          }
        }

        this.robots.forEach(robot => {
          robot.createFoobar();
        });
      }

      if (this.stock.getNumberFoo() < 9) {
        this.robots.forEach(robot => {
          robot.moveTo(Positions.Foo);
        });
        this.robots.forEach(robot => {
          robot.mineFoo();
        });
      }

      if (this.stock.getNumberBar() < 3) {
        this.robots.forEach(robot => {
          robot.moveTo(Positions.Bar);
        });
        this.robots.forEach(robot => {
          robot.mineBar();
        });
      }

      await this.tick();
    }
  }

  public isSuccess(): boolean {
    return this.robots.length < 30;
  }

  public addRobot(robot: Robot): void {
    this.robots.push(robot);
  }

  private robotOnBuying(): boolean {
    for (const robot of this.robots) {
      if (robot.getMovingTo() === Positions.Buy || robot.getPosition() === Positions.Buy) {
        return true;
      }
    }

    return false;
  }

  private robotOnSelling(): boolean {
    for (const robot of this.robots) {
      if (robot.getMovingTo() === Positions.Sell || robot.getPosition() === Positions.Sell) {
        return true;
      }
    }

    return false;
  }

  private robotOnCreatingFoobar(): boolean {
    for (const robot of this.robots) {
      if (robot.getMovingTo() === Positions.Foobar || robot.getPosition() === Positions.Foobar) {
        return true;
      }
    }

    return false;
  }

  private async tick(): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, 0));
  }
}

export {Factory};
