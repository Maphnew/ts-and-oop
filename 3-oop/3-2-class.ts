type ACupOfCoffee = {
  shots: number;
};

class CoffeeMachine {
  static BEANS_GRAMM_PER_SHOT = 7; // class level
  coffeeBeans: number = 0; // instance (object) level
  constructor(coffeeBeans: number) {
    this.coffeeBeans = coffeeBeans;
  }
  static makeMachine(coffeeBeans: number): CoffeeMachine {
    return new CoffeeMachine(coffeeBeans);
  }
  makeCoffee(shots: number): ACupOfCoffee {
    if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
      throw new Error(`Not enough coffee beans!`);
    }
    this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    return {
      shots,
    };
  }
}

const RedCoffeeMachine = new CoffeeMachine(30);
RedCoffeeMachine.makeCoffee(3);
console.log(RedCoffeeMachine);
const NewCoffeeMachine = CoffeeMachine.makeMachine(19);
