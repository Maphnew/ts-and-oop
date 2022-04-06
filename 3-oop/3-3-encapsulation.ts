{
  type ACupOfCoffee = {
    shots: number;
  };

  // public
  // private
  // protected
  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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

  const RedCoffeeMachine = CoffeeMachine.makeMachine(30);
  RedCoffeeMachine.fillCoffeeBeans(30);
}
