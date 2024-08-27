// String dan Metodenya
let greeting = "Hello World";

let lengthGreeting = greeting.length;
console.log(lengthGreeting);

let upperCaseGreeting = greeting.toUpperCase();
console.log(upperCaseGreeting);

let lowerCaseGreeting = greeting.toLowerCase();
console.log(lowerCaseGreeting);

let charAtGreeting = greeting.charAt(4);
console.log(charAtGreeting);

let indexOfGreeting = greeting.indexOf("W");
let indexOfGreeting1 = greeting.indexOf("s");
console.log(indexOfGreeting);
console.log(indexOfGreeting1);

let sliceGreeting = greeting.slice(1, 4);
let sliceGreeting1 = greeting.slice(6);
let sliceGreeting2 = greeting.slice(-3);
console.log(sliceGreeting);
console.log(sliceGreeting1);
console.log(sliceGreeting2);

let subStringGreeting = greeting.substring(1, 8);
console.log(subStringGreeting);
let subStringGreeting1 = greeting.substring(9);
console.log(subStringGreeting1);

let replaceGreeting = greeting.replace("World", "Jajang");
console.log(replaceGreeting);

let splitGreeting = greeting.split(" ");
console.log(splitGreeting);

let includesGreeting = greeting.includes("s");
console.log(includesGreeting);
let includesGreeting1 = greeting.includes("world");
console.log(includesGreeting1);
let includesGreeting2 = greeting.includes("World");
console.log(includesGreeting2);

let greetingTrim = "    Hello    World    ";
let trimGreeting = greetingTrim.trim();
console.log(trimGreeting);
