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
jajang.greet("Hello, my name is ");
