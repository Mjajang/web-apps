// Deklarasi Variable
let namaPertama = "Jajang";
let namaTerakhir = "Mahrul";
console.log(`${namaPertama} ${namaTerakhir}`);
let umur = 24;
let alamat;
const warnaKulit = "";
const ras = [];
alamat = "Subang";
console.log(
  `${namaPertama} ${namaTerakhir} umur saya ${umur} ras saya ${ras} warna kulit saya ${warnaKulit} alamat saya ${alamat}`
);

// Deklarasi Fungsi
function greeting() {
  console.log("Hai apa kabar mu jajang?");
}
greeting();
function greetingWithParams(name = "Budi", statement = "How are you") {
  return `Hai ${name} ${statement}?`;
}
console.log(greetingWithParams("Sultan"));
greetingWithParams();
greetingWithParams("Ryan", "apa kabar");
greetingWithParams("Azza");
function checkUmur(umur) {
  console.log(`Umur kamu ${umur}`);
}
checkUmur(24);
let greetings = function () {
  return `Welcome guys`;
};
console.log(greetings());
let greetingsWithParams = function (name) {
  console.log(`halo disana ${name}`);
};
greetingsWithParams("Agus");
let countCurrentUmur = (bornYear) => 2024 - bornYear;
countCurrentUmur(2000);
let questions = () => `how is your day?`;
console.log(questions());

// Deklarasi Class
class Employee {
  constructor() {
    this.name = "budi";
  }

  infoEmployee() {
    console.log(`Name employee: ${this.name}`);
  }
}

let employ = new Employee();
employ.infoEmployee();

// Operator Javascript
// Aritmatika
let retangel = 10 + 10;
let lebar = 10;
let luas = 10.5;
console.log(retangel);
console.log(lebar * luas);

// Pembanding
let number1 = 10;
let number2 = "10";
console.log(lebar > luas);
console.log(lebar < luas);
console.log(lebar >= luas);
console.log(number1 == number2);
console.log(number1 === number2);
console.log(number1 != number2);
console.log(number1 !== number2);

// Logika
if (number1 === number2 && true) {
  console.log(`Hello world`);
  // }else if(number1 || number2 && true){
  console.log(`Hello world2`);
} else {
  console.log(!true);
}

// Penugasan
let nomor = 10;
nomor += 10;
nomor -= 10;
nomor *= 10;
nomor /= 2;
nomor %= 3;

// Operator Lain
nomor === 2 ? "modulus" : "even";
