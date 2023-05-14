const a: number = 5;

type I1Point = {
  x: number;
  y: number;
};

type I2Point = I1Point & {
  z: number;
};

interface II1Point {
  x: number;
  y: number;
}
interface II2Point extends II1Point {
  z: number;
}
interface II1Point {
  c: number;
}

type Action = "up" | "down"; // literal type
let c: string = "test";
function perfAction(action: Action): -1 | 1 {
  switch (action) {
    case "up":
      return -1;
    case "down":
      return 1;
  }
}

class Point1 {
  //   private x: number;
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // this.z = z;
  }
  //   private foo1(){} // private - means that it is visible ony inside this class
  protected foo1() {} // protected - means that it isn't visible out of this class and inherited classes (in objects)
  foo2() {}
}
const a1 = new Point1(2, 3);
// a1.x = 1;
// console.log(a1.x) // error when x is a privit property
class Point2 extends Point1 {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = x;
    // this.foo1() // impossible, when - private foo1(){}
  }
  foo2(name?: string) {} // foo2(name: string){} - error, because redefining should bewith the same signature and structure
  // here we adde the '?' sign to avoid that error
}

const a2 = new Point2(1, 2, 3);

class Point3 {
  static a = "abc";
}
console.log(Point3.a);

abstract class Point4 {
  // абстрактний класс не дозволяє створювати
  // екземпляри на йго основі, але його можна розширювати в дочірніх класах
  constructor() {}
}

interface C {
  test: () => void;
}
class Point5 implements C {
  test() {}
  x: number;
  constructor(x: number) {
    this.x = x;
  }
}

// enum Direction { // це числовий enum; в цьому прикладі змінним автоматчсно присвоюються чіслові індекси як значення
//   Up = 1, // це означає, що ми визначилли перше значення в цьому переліку значень, наступні значення тут будуть - 2, 3, ...
//   Down,
//   Left,
//   Right,
// }

enum Direction { // це строковий enum - тут обов1язково потрібно задати усюди строкові значення
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Decision { // це гетерогенний enum
  Yes = 1,
  No = "No",
}
enum Des1 { // обчислювальний enum - може бути тільки числовим
  value = 1,
  val2 = foo1(),
}
function foo1() {
  // return '123' // error - обчислювальний enum - може бути тільки числовим
  return 2;
}

function runEnum(obj: { Up: string }) {}
runEnum(Direction);

enum Test {
  A,
}
let test = Test.A;
let nameA = Test[test]; // A (0)

const enum ConstEnum { // якщо enum використовуються як константи, то краще робити так як тут - через контанту
  // оскільки енам перетворюється в функцію по дефолту, а в цьому випадку функції немає
  A,
  B,
}
let a3 = ConstEnum.A;

function logTime<T>(val: T): T {
  return val;
}
logTime<string>("sda");
logTime<number>(56465);

interface MyInterface {
  transform: <T, F>(val: T) => F;
}

class MyGenClass<T> {
  value: T;
}
const a6 = new MyGenClass<number>();

interface TineStamp {
  stamp: number;
}
function timeSt<T extends TineStamp>(num: T) {
  console.log(num.stamp);
  return num;
}
