{
  // 2.9 타입스크립트의 꽃 🌹 Type Aliases
  type Text = string;
  const name: Text = "maphanew";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "maphanew",
    age: 30,
  };

  // String Literal Types
  type Name = "name";
  let maphanewName: Name;
  maphanewName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
