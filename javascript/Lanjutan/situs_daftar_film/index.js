import Button from "./components/Button/index.js";
import ListComponent from "./components/List/index.js";
import { route } from "./utils/route.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttonProps = {
    text: "Submit",
    variant: "primary",
    onclick: () => {
      console.log("Function passed");
    },
  };

  const myButton = new Button(buttonProps);
  document.body.appendChild(myButton.render());
  const myList = new ListComponent({ items: ["List 1", "List 2", "List 3", "List 4"] });
  document.body.appendChild(myList.render());

  window.history.replaceState(null, null, "#"); // default route
});

window.addEventListener("hashchange", () => {
  const hash = window.location.hash.substring(1); // remove #
  route(hash);
});
