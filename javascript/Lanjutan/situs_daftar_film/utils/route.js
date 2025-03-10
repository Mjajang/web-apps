import Homepage from "../components/pages/homepage/index.js";
import Detailpage from "../components/pages/detail/index.js";
const ROUTES = {
  home: new Homepage().render(),
  detail: new Detailpage().render(),
  not_found: new Homepage().render(),
};

export const route = (hash) => {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = "";
  const hashRoute = hash === "" ? "home" : hash;
  const isAvailable = ROUTES.hasOwnProperty(hashRoute);

  if (isAvailable) {
    appContainer.appendChild(ROUTES[hashRoute]);
  } else {
    console.log("Not Found Page");
  }
};
