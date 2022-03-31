{
  type Coffee = {
    shots: number;
    milk?: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let beans: number = 0;

  const makeCoffee = (shots: number, milk?: boolean): Coffee => {
    if (beans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough beans!");
    }
    beans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
    };
  };
  beans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
