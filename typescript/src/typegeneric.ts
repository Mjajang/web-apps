// generic type
// generic type is used to create a function or class that can work with any type. Generic type is defined using the `<>` syntax. Generic type can be used to create a function or class that can work with any type. Generic type can be used to create a function or class that can work with any type that is passed as an argument. Generic type can be used to create a function or class that can work with any type that is passed as an argument and is not defined yet. Generic type can be used to create a function or class that can work with any type that is passed as an argument and is already defined in another file. Generic type can be used to create a function or class that can work with any type that is passed as an argument and is not defined yet in another file. Generic type can be used to create a function or class that can work with any type that is passed as an argument and is already defined in another file and is imported into the current file.
// generic type and function
function getData<T, U>(data: T, data2: U): T | U {
  return data;
}
console.log(getData<string, number>("Jajang", 1)); // Jajang
console.log(getData<number, string>(1, "Jajang")); // 1
console.log(getData<string, string>("Jajang", "Azzario")); // Jajang
console.log(getData<number, number>(1, 2)); // 1
console.log(getData<boolean, boolean>(true, false)); // true
console.log(getData<string, boolean>("Jajang", true)); // Jajang

// generic class
class Data<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
  getData(): T {
    return this.data;
  }
}
const data1 = new Data<string>("Jajang");
console.log(data1.getData()); // Jajang
const data2 = new Data<number>(1);
console.log(data2.getData()); // 1
const data3 = new Data<boolean>(true);
console.log(data3.getData()); // true
const data4 = new Data<string[]>(["Jajang", "Azzario"]);
console.log(data4.getData()); // ["Jajang", "Azzario"]
const data5 = new Data<{ name: string; age: number }>({
  name: "Jajang",
  age: 20,
});
console.log(data5.getData()); // { name: "Jajang", age: 20 }
const data6 = new Data<[string, number]>(["Jajang", 20]);
console.log(data6.getData()); // ["Jajang", 20]
