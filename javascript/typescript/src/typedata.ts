/* INSTALL INITIAL*/
/* 
- npm install -g typescript 
- tsc -v
- tsc --init
- tsc
- node bundler/index.js
- tsc; node bundler/index.js
*/

/* TYPE DATA */
// string
let firstName: string = "Jajang";
console.log(firstName); // Jajang
firstName = "false"; // it will be error
console.log(firstName); // Jajang

// number
let age: number = 20;
console.log("age is: ", age); // 20
age = 24.5;
console.log("age is: ", age);
// age = "24.5"; // it will be error
// console.log("age is: ", age); // 24.5

// boolean
let isLogin: boolean = false;
console.log("isLogin: ", isLogin);

// array
let hobbies: string[] = ["reading", "gaming", "coding"];
console.log("hobbies: ", hobbies);

// function
function add(a: number, b: number): number {
  return a + b;
}
console.log("add: ", add(1, 2)); // 3

const handleCalculate = (a: number, b: number): void => {
  console.log("handleCalculate: ", a + b); // 3
};
handleCalculate(1, 2);

// any
let data: any = 1;
console.log("data: ", data); // 1
data = "Jajang";
console.log("data: ", data); // Jajang

// enum
enum Speed {
  SLOW = 1,
  MEDIUM,
  FAST,
}
console.log(Speed.SLOW, Speed.MEDIUM, Speed.FAST);

// tuple
type PersonType = [string, number, boolean];
let person: PersonType = ["Jajang", 20, true];
console.log("person: ", person);
let user: [string, number, boolean] = ["Jajang", 20, true];
console.log("user: ", user);

// unknown
let unknownData: unknown = 1;
console.log("unknownData: ", unknownData); // 1
unknownData = "Jajang";
console.log("unknownData: ", unknownData); // Jajang

// union
let unionData: string | number = 1;
console.log("unionData: ", unionData); // 1
unionData = "Jajang";
console.log("unionData: ", unionData); // Jajang
// unionData = true; // it will be error
let nickname: "jm" | "jajang" = "jm";
console.log("nickname: ", nickname); // jm
// nickname = "azzario";
// console.log("nickname: ", nickname); // azzario

// type checking
// in typescript, type checking is done at compile time, not at runtime
// so you can't check the type of a variable at runtime
// you can use typeof operator to check the type of a variable at runtime
// but it will not work for custom types
// you can use instanceof operator to check the type of a variable at runtime
// but it will not work for primitive types
let nama = "azzario";
// nama = 1; // it will be error
console.log("nama: ", nama); // azzario
