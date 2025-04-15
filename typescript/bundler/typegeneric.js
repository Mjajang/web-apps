"use strict";
// generic type
// generic type is used to create a function or class that can work with any type. Generic type is defined using the `<>` syntax. Generic type can be used to create a function or class that can work with any type. Generic type can be used to create a function or class that can work with any type that is passed as an argument. Generic type can be used to create a function or class that can work with any type that is passed as an argument and is not defined yet. Generic type can be used to create a function or class that can work with any type that is passed as an argument and is already defined in another file. Generic type can be used to create a function or class that can work with any type that is passed as an argument and is not defined yet in another file. Generic type can be used to create a function or class that can work with any type that is passed as an argument and is already defined in another file and is imported into the current file.
// generic type and function
function getData(data, data2) {
    return data;
}
console.log(getData("Jajang", 1)); // Jajang
console.log(getData(1, "Jajang")); // 1
console.log(getData("Jajang", "Azzario")); // Jajang
console.log(getData(1, 2)); // 1
console.log(getData(true, false)); // true
console.log(getData("Jajang", true)); // Jajang
// generic class
class Data {
    constructor(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
const data1 = new Data("Jajang");
console.log(data1.getData()); // Jajang
const data2 = new Data(1);
console.log(data2.getData()); // 1
const data3 = new Data(true);
console.log(data3.getData()); // true
const data4 = new Data(["Jajang", "Azzario"]);
console.log(data4.getData()); // ["Jajang", "Azzario"]
const data5 = new Data({
    name: "Jajang",
    age: 20,
});
console.log(data5.getData()); // { name: "Jajang", age: 20 }
const data6 = new Data(["Jajang", 20]);
console.log(data6.getData()); // ["Jajang", 20]
