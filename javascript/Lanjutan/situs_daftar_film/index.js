import Button from "./components/UI/Button/index.js";
import ListComponent from "./components/UI/List/index.js";
import { route } from "./utils/route.js";

const handleHash = () => {
  const hash = window.location.hash.substring(1); // remove #
  route(hash);
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "") {
    window.history.replaceState(null, null, "#"); // default route
  }
  handleHash();
});

window.addEventListener("hashchange", handleHash);
