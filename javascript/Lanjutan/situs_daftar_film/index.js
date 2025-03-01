import Button from "./components/Button/index.js";
import ListComponent from "./components/List/index.js";

const myButton = new Button();
document.body.appendChild(myButton.render());
const myList = new ListComponent();
document.body.appendChild(myList.render());
