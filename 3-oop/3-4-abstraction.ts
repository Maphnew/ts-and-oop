{
  type ACupOfCoffee = {
    shots: number;
    hasMilk: false;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): ACupOfCoffee;
  }

  class CoffeeMachine implements CoffeeMaker {
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
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error(`Not enough coffee beans!`);
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log("Heating up... 🔥");
    }

    private extract(shots: number): ACupOfCoffee {
      console.log(`Pulling ${shots} shots...☕`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): ACupOfCoffee {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const RedCoffeeMachine: CoffeeMachine = CoffeeMachine.makeMachine(30);
  RedCoffeeMachine.fillCoffeeBeans(30);
  RedCoffeeMachine.makeCoffee(2);

  const BlackCoffeeMachine: CoffeeMaker = CoffeeMachine.makeMachine(30);
  //   BlackCoffeeMachine.fillCoffeeBeans(30);
  BlackCoffeeMachine.makeCoffee(2);
}
