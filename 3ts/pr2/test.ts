type Point1 = { x: number; y: number };
type P = keyof Point1; // P - union тип (x | y)

function MyOf() {
  return { a: 1 };
}
type K = ReturnType<typeof MyOf>;

type MyOf1 = () => { a: number };
type K1 = ReturnType<MyOf1>;

const arr1 = [{ name: "Bob", age: 30 }];
type Person1 = (typeof arr1)[number];
type Age = (typeof arr1)[number]["age"];

type Message1<T> = T extends { message: unknown } ? T["message"] : never;
interface Email {
  message: string;
}
interface Cat {
  text: string;
}
type EmailContent = Message1<Email>;
type CatContent = Message1<Cat>;

interface Test1 {
  [key: string]: number; // це означає, що тут ми можемо використовувати необмежену кількість ключів-значень
}

type OptionaFlags<Type> = {
  [Property in keyof Type]: boolean; // мы преобразовуем тип Type в свойства в ключах Type и присваиваем им значен
};

type world = "world";
type Greeting = `hello ${world}`;
