// For
let i = 1;
let j = 10;
for (i; i < 11; i++) {
  console.log(i);
}
for (j; j > 0; j--) {
  console.log(j);
}
// While
let no = 1;
while (no <= 10) {
  console.log(no);
  no++;
}
// Do While
do {
  j++;
  console.log(j);
} while (j <= 10);

// For Of -> array
let employe = ["jajang", "ryan", "azzario", "sultan", "bima"];
for (let name of employe) {
  console.log("my name " + name);
}

// For In -> object
let employes = {
  name: "jajang mahrul",
  age: 24,
  address: "subang",
};
for (let x in employes) {
  console.log(`${x}: ${employes[x]}`);
}

// Break & Continue
for (let v = 1; v < 11; v++) {
  if (v % 2 === 0) {
    continue;
  }
  console.log(v);
}

for (let b = 1; b < 11; b++) {
  if (b === 3) {
    break;
  }
  console.log(b);
}
