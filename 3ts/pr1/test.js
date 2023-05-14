"use strict";
const a = 5;
let c = "test";
function perfAction(action) {
    switch (action) {
        case "up":
            return -1;
        case "down":
            return 1;
    }
}
class Point1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.z = z;
    }
    //   private foo1(){} // private - means that it is visible ony inside this class
    foo1() { } // protected - means that it isn't visible out of this class and inherited classes (in objects)
    foo2() { }
}
const a1 = new Point1(2, 3);
// a1.x = 1;
// console.log(a1.x) // error when x is a privit property
class Point2 extends Point1 {
    constructor(x, y, z) {
        super(x, y);
        this.z = x;
        // this.foo1() // impossible, when - private foo1(){}
    }
    foo2(name) { } // foo2(name: string){} - error, because redefining should bewith the same signature and structure
}
const a2 = new Point2(1, 2, 3);
class Point3 {
}
Point3.a = "abc";
console.log(Point3.a);
class Point4 {
    // абстрактний класс не дозволяє створювати
    // екземпляри на йго основі, але його можна розширювати в дочірніх класах
    constructor() { }
}
class Point5 {
    constructor(x) {
        this.x = x;
    }
    test() { }
}
// enum Direction { // це числовий enum; в цьому прикладі змінним автоматчсно присвоюються чіслові індекси як значення
//   Up = 1, // це означає, що ми визначилли перше значення в цьому переліку значень, наступні значення тут будуть - 2, 3, ...
//   Down,
//   Left,
//   Right,
// }
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision["No"] = "No";
})(Decision || (Decision = {}));
var Des1;
(function (Des1) {
    Des1[Des1["value"] = 1] = "value";
    Des1[Des1["val2"] = foo1()] = "val2";
})(Des1 || (Des1 = {}));
function foo1() {
    // return '123' // error - обчислювальний enum - може бути тільки числовим
    return 2;
}
function runEnum(obj) { }
runEnum(Direction);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test = Test.A;
let nameA = Test[test]; // A (0)
let a3 = 0 /* A */;
