// conditional type is used to create a type that depends on a condition. Conditional type is defined using the `T extends U ? X : Y` syntax. Conditional type can be used to create a type that depends on a condition. Conditional type can be used to create a type that depends on a condition and is not defined yet. Conditional type can be used to create a type that depends on a condition and is already defined in another file. Conditional type can be used to create a type that depends on a condition and is not defined yet in another file. Conditional type can be used to create a type that depends on a condition and is already defined in another file and is imported into the current file.
// inference type is used to create a type that is inferred from a value. Inference type is defined using the `typeof` operator. Inference type can be used to create a type that is inferred from a value. Inference type can be used to create a type that is inferred from a value and is not defined yet. Inference type can be used to create a type that is inferred from a value and is already defined in another file. Inference type can be used to create a type that is inferred from a value and is not defined yet in another file. Inference type can be used to create a type that is inferred from a value and is already defined in another file and is imported into the current file.
// Distributed conditional type is used to create a type that is distributed over a union type. Distributed conditional type is defined using the `T extends U ? X : Y` syntax. Distributed conditional type can be used to create a type that is distributed over a union type. Distributed conditional type can be used to create a type that is distributed over a union type and is not defined yet. Distributed conditional type can be used to create a type that is distributed over a union type and is already defined in another file. Distributed conditional type can be used to create a type that is distributed over a union type and is not defined yet in another file. Distributed conditional type can be used to create a type that is distributed over a union type and is already defined in another file and is imported into the current file.

type FunctionPropertyName<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}

type T4 = FunctionPropertyName<Part>; // "updatePart"
type T5 = FunctionPropertyName<{ name: string; age: number }>; // never
type T6 = FunctionPropertyName<{ name: string; age: number; greet(): void }>; // "greet"
type T7 = FunctionPropertyName<{ name: string; age: number; greet(): void; sayHello(): void }>; // "greet" | "sayHello"
