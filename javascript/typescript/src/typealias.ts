// type alias is used to create a new name for a type. It can be used to create a new name for a primitive type, union type, intersection type, tuple type, or any other type. Type alias is defined using the `type` keyword followed by the name of the alias and the type definition. Type alias can be used to create a new name for a type that is already defined. Type alias can also be used to create a new name for a type that is not defined yet. Type alias can be used to create a new name for a type that is already defined in another file. Type alias can be used to create a new name for a type that is not defined yet in another file. Type alias can be used to create a new name for a type that is already defined in another file and is imported into the current file.

type StringName = string; // type alias for string
type Age = number; // type alias for number
type PersonNecessary = {
  name: StringName; // type alias for string
  age: Age; // type alias for number
  email: string; // type alias for string
};

interface PersonOptional {
  name: StringName; // type alias for string
  age: Age; // type alias for number
  email: string; // type alias for string
}
type Persons = PersonNecessary & PersonOptional; // type alias for object
