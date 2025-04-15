// narrowing is a way to refine the type of a variable
// predictve type is a way to predict the type of a variable
function isString(data: string | number): data is string {
  return typeof data === "string";
}

function isNumber(data: string | number): data is number {
  return typeof data === "number";
}

// exhaustive check
// exhaustive check is a way to check if all possible types are handled in a switch case or if statement
interface Bird {
  type: "bird";
  flyingSpeed: number;
  fly: () => void;
}

interface Fish {
  type: "fish";
  swimmingSpeed: number;
  swim: () => void;
}

type Animal = Bird | Fish;
function handleAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      animal.fly();
      break;
    case "fish":
      animal.swim();
      break;
    default:
      const _exhaustiveCheck: never = animal; // it will be error if animal is not bird or fish
      return _exhaustiveCheck;
  }
}
function moveAnimal(animal: Animal): string {
  if (animal.type === "bird") {
    animal.fly();
    return `Terbang dengan kecepatan ${animal.flyingSpeed} km/jam`;
  } else if (animal.type === "fish") {
    animal.swim();
    return `Berenang dengan kecepatan ${animal.swimmingSpeed} km/jam`;
  } else {
    const _exhaustiveCheck: never = animal; // it will be error if animal is not bird or fish
    return _exhaustiveCheck;
  }
}
