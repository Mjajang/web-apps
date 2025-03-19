import Homepage from "../components/pages/homepage/index.js";
import Detailpage from "../components/pages/detail/index.js";
import AboutPage from "../components/pages/about/index.js";
import NotFound from "../components/pages/404/index.js";
const ROUTES = {
  home: new Homepage().render(),
  detail: new Detailpage().render(),
  about: new AboutPage().render(),
  _404: new NotFound().render(),
};

export const route = (hash) => {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = "";
  const hashRoute = hash === "" ? "home" : hash.split("?")[0];
  const isAvailable = ROUTES.hasOwnProperty(hashRoute);

  if (isAvailable) {
    appContainer.appendChild(ROUTES[hashRoute]);
  } else {
    appContainer.appendChild(ROUTES["_404"]);
  }
};
