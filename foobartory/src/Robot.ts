import {v4 as generateId} from 'uuid';

import config from './config';
import {Factory} from './Factory';
import {Action, Actions, Position, Positions} from './Position';
import {Stock} from './Stock';
import {between} from './utils';

class Robot {
  static count = 1;

  private readonly stock: Stock;
  private position: Position = Positions.None;
  private movingTo: Position = Positions.None;
  private action: Action = Actions.None;
  private readonly factory: Factory;
  private readonly id: number;

  constructor(stock: Stock, factory: Factory) {
    this.stock = stock;
    this.factory = factory;

    this.id = Robot.count;
    Robot.count++;
  }

  public getPosition() {
    return this.position;
  }

  public getMovingTo() {
    return this.movingTo;
  }

  public getAction() {
    return this.action;
  }

  public moveTo(position: Position) {
    if (position !== this.position && this.action === Actions.None) {
      this.action = Actions.Moving;
      this.movingTo = position;
      this.position = Positions.None;
      setTimeout(() => {
        console.log(`Robot n°${this.id} moved to ${position}`);
        this.action = Actions.None;
        this.movingTo = Positions.None;
        this.position = position;
      }, 5000 / config.timeMultiplier);
    }
  }

  public mineFoo() {
    if (this.position === Positions.Foo && this.action === Actions.None) {
      this.action = Actions.MiningFoo;

      setTimeout(() => {
        console.log(`Robot n°${this.id} mined 1 foo`);

        this.stock.stockFoo(generateId());
        this.action = Actions.None;
      }, 1000 / config.timeMultiplier);
    }
  }

  public mineBar() {
    if (this.position === Positions.Bar && this.action === Actions.None) {
      this.action = Actions.MiningBar;
      setTimeout(() => {
        console.log(`Robot n°${this.id} mined 1 bar`);
        this.stock.stockBar(generateId());
        this.action = Actions.None;
      }, between(500 / config.timeMultiplier, 2000 / config.timeMultiplier));
    }
  }

  public createFoobar() {
    if (this.position === Positions.Foobar && this.action === Actions.None) {
      const foo = this.stock.takeFoo();
      const bar = this.stock.takeBar();

      if (foo !== undefined && bar !== undefined) {
        this.action = Actions.CreatingFooBar;
        setTimeout(() => {
          if (between(0, 100) >= 60) {
            this.stock.stockBar(bar);
            console.log(`Robot n°${this.id} failed to create foobar`);
          } else {
            console.log(`Robot n°${this.id} succeed to create foobar`);
            this.stock.stockFoobar(bar + foo);
          }

          this.action = Actions.None;
        }, 2000 / config.timeMultiplier);
      }
    }
  }

  public sellFooBar(nb: number) {
    if (
      this.position === Positions.Sell
      && this.action === Actions.None
      && this.stock.getNumberFoobar() >= nb
      && nb <= 5
    ) {
      this.action = Actions.SellingFoobar;
      for (let i = 0; i < nb; i++) {
        this.stock.takeFoobar();
      }

      setTimeout(() => {
        console.log(`Robot n°${this.id} sold ${nb} foobar`);

        this.stock.stockMoney(nb);
        this.action = Actions.None;
      }, 10000 / config.timeMultiplier);
    }
  }

  public buyRobot() {
    if (
      this.position === Positions.Buy
      && this.action === Actions.None
      && this.stock.getMoney() >= 3
      && this.stock.getNumberFoo() >= 6
    ) {
      this.action = Actions.BuyingRobot;

      this.stock.takeMoney(3);
      for (let i = 0; i < 6; i++) {
        this.stock.takeFoo();
      }

      setTimeout(() => {
        const robot = new Robot(this.stock, this.factory);

        console.log(`Robot n°${this.id} bought new robot`);

        this.factory.addRobot(robot);
        this.action = Actions.None;
      }, 0);
    }
  }
}

export {Robot};
