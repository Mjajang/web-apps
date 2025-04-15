interface Person {
  name: string;
  age: number;
  email: string;
  greet(message: string): void;
}

let jajang: Person = {
  name: "Jajang",
  age: 20,
  email: "jajang.mahrul.work@gmail.com",
  greet(message: string) {
    console.log(message + this.name);
  },
};
let azzario: Person = {
  name: "Azzario",
  age: 22,
  email: "azzariorazy@gmail.com",
  greet(message: string) {
    console.log(message + this.name);
  },
};
jajang.greet("Hello, my name is ");
azzario.greet("Hello, my name is ");

// Interface vs Type
// 1. Declaration interface using interface keyword and type using type keyword
// 2. Interface can be extended using extends keyword and type can be extended using intersection (&) operator
// 3. main use case of interface is to define the shape of an object and type is to define the shape of a variable like alias, union, tuple, etc

// Interface and Function
interface ReturnInsertPerson {
  status_code: number;
  message: string;
  data: Person;
  // optional property
  error?: string;
  stack_trace?: string;
}

function insertPerson(person: Person): ReturnInsertPerson {
  // do something with person
  console.log("insertPerson: ", person);
  return {
    status_code: 200,
    message: "success",
    data: person,
  };
}

const insertPerson2 = (person: Person): ReturnInsertPerson => {
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

// Interface indexable
// indexable type is used to define the shape of an object that can be accessed using index
// like array or object
// indexable type is defined using [index: type] syntax
interface StringArray {
  [index: number]: string; // indexable type
}
const stringArray: StringArray = ["Jajang", "Azzario", "Mahrul"];
console.log("stringArray: ", stringArray); // ["Jajang", "Azzario", "Mahrul"]
