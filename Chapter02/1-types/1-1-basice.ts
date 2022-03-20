{
  // Primitive
  // number, string, boolean, bigint, Symbole, null, nudefined
  // Object
  // function, array

  // number
  const num: number = 1;

  // string
  const str: string = "abc";

  // boolean
  const bln: boolean = true;

  // undefined 💩
  let age: number | undefined;
  age = 1;
  age = undefined;

  // null 💩
  let person: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "HH";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hhhhhhhelllllooo";

  // void
  function print(): void {
    return;
  }

  // never
  function throwError(message: string): never {
    throw new Error(message);
    while (true) {}
  }

  // object 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: "a" });
  acceptSomeObject([1, 2, 3]);
}
