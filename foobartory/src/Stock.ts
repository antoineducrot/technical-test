class Stock {
  private readonly foo: string[] = [];
  private readonly bar: string[] = [];
  private readonly foobar: string[] = [];
  private money = 0;

  public takeMoney(nb: number): number {
    if (this.money < nb) {
      return 0;
    }

    this.money -= nb;

    return nb;
  }

  public stockMoney(nb: number) {
    if (nb > 0) {
      this.money += nb;
    }
  }

  public getMoney(): number {
    return this.money;
  }

  public takeFoo(): string | undefined {
    return this.foo.pop();
  }

  public stockFoo(foo: string): void {
    this.foo.push(foo);
  }

  public getNumberFoo(): number {
    return this.foo.length;
  }

  public stockBar(bar: string): void {
    this.bar.push(bar);
  }

  public takeBar(): string | undefined {
    return this.bar.pop();
  }

  public getNumberBar(): number {
    return this.bar.length;
  }

  public stockFoobar(foobar: string): void {
    this.foobar.push(foobar);
  }

  public takeFoobar(): string | undefined {
    return this.foobar.pop();
  }

  public getNumberFoobar(): number {
    return this.foobar.length;
  }
}

export {Stock};
