import Typography from "../../UI/Typography/index.js";

class Navigation {
  constructor(parameters) {
    this.navigationContainer = document.createElement("div");
    this.navigationContainer.className = "navigation-container";
  }

  render() {
    const title = new Typography({ variant: "h1", children: "FASTMOVIE" });
    this.navigationContainer.appendChild(title.render());
    const homeLink = new Typography({ variant: "h5", children: "Home" });
    this.navigationContainer.appendChild(homeLink.render());
    const aboutLink = new Typography({ variant: "h5", children: "About" });
    this.navigationContainer.appendChild(aboutLink.render());
    return this.navigationContainer;
  }
}

export default Navigation;
