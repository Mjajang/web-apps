// import type
// named imports is used to import specific members from a module. It is used to import specific members from a module that are already defined. It is used to import specific members from a module that are not defined yet. It is used to import specific members from a module that are already defined in another file. It is used to import specific members from a module that are not defined yet in another file. It is used to import specific members from a module that are already defined in another file and are imported into the current file.
// namespace imports is used to import all members from a module. It is used to import all members from a module that are already defined. It is used to import all members from a module that are not defined yet. It is used to import all members from a module that are already defined in another file. It is used to import all members from a module that are not defined yet in another file. It is used to import all members from a module that are already defined in another file and are imported into the current file.

// export type
// name export is used to export a specific member from a module. It is used to export a specific member from a module that is already defined. It is used to export a specific member from a module that is not defined yet. It is used to export a specific member from a module that is already defined in another file. It is used to export a specific member from a module that is not defined yet in another file. It is used to export a specific member from a module that is already defined in another file and is imported into the current file.
// default export is used to export a single member from a module. It is used to export a single member from a module that is already defined. It is used to export a single member from a module that is not defined yet. It is used to export a single member from a module that is already defined in another file. It is used to export a single member from a module that is not defined yet in another file. It is used to export a single member from a module that is already defined in another file and is imported into the current file.

// this is a named export
// export type Human = {
//   name: string;
//   age: number;
// };

type Human = {
  name: string;
  age: number;
};

// this is a default export
export default Human;
