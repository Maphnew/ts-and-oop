// 상속의 문제점
// 1. 복잡성
// 2. 하나의 클래스만 상속 가능

{
  type ACupOfCoffee = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): ACupOfCoffee;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      console.log(`Filling beans: ${beans}`);

      this.coffeeBeans += beans;
    }
    clean() {
      console.log("Cleaning the machine... 💦");
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

  class LatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeCoffee(shots: number): ACupOfCoffee {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }
    makeCoffee(shots: number): ACupOfCoffee {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new LatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new LatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("----------");
    machine.makeCoffee(1);
  });
}
