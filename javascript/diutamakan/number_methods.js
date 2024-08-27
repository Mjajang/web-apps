// Angka dan Metodenya
const a = 10;
const b = 10.734270032;
const c = 3.1406309303;
const d = 255;

let tofixed = (x) => Number.parseFloat(x).toFixed(3);
console.log(tofixed(a));
console.log(tofixed(b));
console.log(a.toFixed(2));

let toprecision = (x) => x.toPrecision(3);
console.log(toprecision(a));
console.log(toprecision(b));
console.log(toprecision(c));
console.log(c.toPrecision(4));

let tostring = (x) => x.toString(x);
console.log(tostring(a));
console.log(tostring(b));
console.log(tostring(c));
console.log(d.toString(11)); //hexdecimal
console.log(d.toString(2)); //binary
console.log(d.toString());

console.log(Number.isInteger(a));
console.log(Number.isInteger(b));
console.log(Number.isInteger(c));
console.log(Number.isInteger(d));

console.log(Number.isNaN(a));
console.log(Number.isNaN(0));
console.log(Number.isNaN(NaN)); //not a number
