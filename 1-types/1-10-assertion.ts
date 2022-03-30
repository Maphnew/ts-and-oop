{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // undefined
  console.log((<string>result).length); // undefined

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // error 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const number = findNumbers()!; // 😱
  number.push(2); // 😱

  const button = document.querySelector("class");
  if (button) {
    button.nodeValue;
  }
}
