class Car {
  engine = 0;
  move(): void {
    console.log("engine🐛");
    const engine = this.engine + 1;
    console.log(engine);
  }
}

const car = new Car();
car.move();
