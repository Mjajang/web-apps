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
