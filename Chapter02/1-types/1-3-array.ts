{
  // 2.8 배열과 튜플, 언제 튜플을 사용해야 할까?
  // Array
  const fruits: string[] = ["🥕", "🍓"];
  const scores: Array<number> = [1, 2, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple 💩 -> index로 검색하면 가독성이 떨어짐
  // interface, type alias, class 대체해서 사용
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // useState가 정의된 방식
}
