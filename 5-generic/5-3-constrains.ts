interface Emplyee {
  pay(): void;
}

class FullTimeEmployee implements Emplyee {
  pay() {
    console.log("Full time!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Emplyee {
  pay() {
    console.log("Part time!");
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(emplyee: Emplyee): Emplyee {
  emplyee.pay();
  return emplyee;
}

function pay<T extends Emplyee>(emplyee: T): T {
  emplyee.pay();
  return emplyee;
}

const maph = new FullTimeEmployee();
const bob = new PartTimeEmployee();
maph.workFullTime();
bob.workPartTime();
const maphAfterPay = pay(maph);
const bobAfterPay = pay(bob);
maphAfterPay.workFullTime();

const obj = {
  name: "maph",
  age: 20,
};

const obj2 = {
  animal: "🐫",
};

function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

console.log(getValue(obj, "name")); // maph
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐫
