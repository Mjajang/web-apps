// function overloading is a way to define multiple function signatures for a single function

function createElement(tagName: "img"): HTMLImageElement; // create element with tag name img
function createElement(tagName: "input"): HTMLInputElement; // create element with tag name input
function createElement(tagName: "button"): HTMLButtonElement; // create element with tag name button

function createElement(tagName: string): HTMLElement {
  return document.createElement(tagName); // create element with tag name
}
