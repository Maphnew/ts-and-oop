{
  // js
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // ts
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // js
  function jsFetch(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // ts
  function fetch(id: string): Promise<number> {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}
