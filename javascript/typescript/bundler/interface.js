"use strict";
let jajang = {
    name: "Jajang",
    age: 20,
    email: "jajang.mahrul.work@gmail.com",
    greet(message) {
        console.log(message + this.name);
    },
};
jajang.greet("Hello, my name is ");
