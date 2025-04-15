"use strict";
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
let firstName = "Jajang";
console.log(firstName); // Jajang
firstName = "false"; // it will be error
console.log(firstName); // Jajang
// number
let age = 20;
console.log("age is: ", age); // 20
age = 24.5;
console.log("age is: ", age);
// age = "24.5"; // it will be error
// console.log("age is: ", age); // 24.5
// boolean
let isLogin = false;
console.log("isLogin: ", isLogin);
// array
let hobbies = ["reading", "gaming", "coding"];
console.log("hobbies: ", hobbies);
// function
function add(a, b) {
    return a + b;
}
console.log("add: ", add(1, 2)); // 3
const handleCalculate = (a, b) => {
    console.log("handleCalculate: ", a + b); // 3
};
handleCalculate(1, 2);
// any
let data = 1;
console.log("data: ", data); // 1
data = "Jajang";
console.log("data: ", data); // Jajang
// enum
var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 1] = "SLOW";
    Speed[Speed["MEDIUM"] = 2] = "MEDIUM";
    Speed[Speed["FAST"] = 3] = "FAST";
})(Speed || (Speed = {}));
console.log(Speed.SLOW, Speed.MEDIUM, Speed.FAST);
let person = ["Jajang", 20, true];
console.log("person: ", person);
let user = ["Jajang", 20, true];
console.log("user: ", user);
// unknown
let unknownData = 1;
console.log("unknownData: ", unknownData); // 1
unknownData = "Jajang";
console.log("unknownData: ", unknownData); // Jajang
// union
let unionData = 1;
console.log("unionData: ", unionData); // 1
unionData = "Jajang";
console.log("unionData: ", unionData); // Jajang
// unionData = true; // it will be error
let nickname = "jm";
console.log("nickname: ", nickname); // jm
// nickname = "azzario";
// console.log("nickname: ", nickname); // azzario
