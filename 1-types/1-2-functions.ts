{
  // // js
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // ts
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // js
  // function jsFetch(id) {
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // ts
  // function fetch(id: string): Promise<number> {
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // 2.7 함수 타입 이용 (spread, default, optional)

  // Optional parameter
  function printName(firstName: string, lastName?: string): string {
    return firstName + " " + lastName;
  }

  printName("Maphanew"); // Maphanew

  // Default parameter
  function printMessage(message: string = "default message"): string {
    return message;
  }

  printMessage(); // default message

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((prev, curr) => {
      return prev + curr;
    });
  }

  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 6, 7, 8));
}
