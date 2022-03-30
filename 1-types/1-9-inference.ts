{
  /**
   * Type Inference
   */
  let text = "hello"; // 자동 유추(추론) text: string
  // function print(message) { // message - implicitly has an 'any' type
  function print(message = "hi") {
    console.log(message);
  }
  print("hello");
  // print(1);

  function add(x: number, y: number) {
    // return type 자동 추론 inference
    return x + y;
  }
  const result = add(1, 3); //  result: number
}
