"use strict";
let jajang = {
    name: "Jajang",
    age: 20,
    email: "jajang.mahrul.work@gmail.com",
    greet(message) {
        console.log(message + this.name);
    },
};
let azzario = {
    name: "Azzario",
    age: 22,
    email: "azzariorazy@gmail.com",
    greet(message) {
        console.log(message + this.name);
    },
};
jajang.greet("Hello, my name is ");
azzario.greet("Hello, my name is ");
function insertPerson(person) {
    // do something with person
    console.log("insertPerson: ", person);
    return {
        status_code: 200,
        message: "success",
        data: person,
    };
}
const insertPerson2 = (person) => {
    // do something with person
    console.log("insertPerson2: ", person);
    return {
        status_code: 200,
        message: "success",
        data: person,
    };
};
insertPerson(jajang);
insertPerson2(azzario);
const stringArray = ["Jajang", "Azzario", "Mahrul"];
console.log("stringArray: ", stringArray); // ["Jajang", "Azzario", "Mahrul"]
let students = [
    {
        nim: "123456789",
        name: "Jajang",
        age: 20,
        email: "jajang.mahrul.work@gmail.com",
        greet(message) {
            console.log(message + this.name);
        },
    },
    {
        nim: "987654321",
        name: "Azzario",
        age: 22,
        email: "azzariorazy@gmail.com",
        greet(message) {
            console.log(message + this.name);
        },
    },
];
let employees = [
    {
        nip: "123456789",
        position: "Manager",
        name: "Jajang",
        age: 20,
        email: "jajang.mahrul.work@gmail.com",
        greet(message) {
            console.log(message + this.name);
        },
    },
    {
        nip: "987654321",
        position: "Staff",
        name: "Azzario",
        age: 20,
        email: "azzario.work@gmail.com",
        greet(message) {
            console.log(message + this.name);
        },
    },
];
