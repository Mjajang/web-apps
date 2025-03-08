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

  if (hash === "") {
    // berada di halaman home
    appContainer.appendChild(ROUTES["home"]);
  } else if (hash === "detail") {
    // berada di halaman detail
    appContainer.appendChild(ROUTES["detail"]);
  } else {
    // halaman tidak ditemukan
    console.log("Not Found Page");
  }
};
