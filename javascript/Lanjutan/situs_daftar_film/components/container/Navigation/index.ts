import Switch from "../../UI/Switch/index.js";
import Typography from "../../UI/Typography/index.js";
import NavProps from "./nav.types.js";

class Navigation {
  navigationContainer: HTMLDivElement;
  setLightMode: (value: boolean) => void;
  isLightMode: boolean;

  constructor({ setLightMode, isLightMode }: NavProps) {
    this.navigationContainer = document.createElement("div");
    this.navigationContainer.className = "navigation-container";
    this.setLightMode = setLightMode;
    this.isLightMode = isLightMode;
  }

  render() {
    const containerLeft = document.createElement("div");
    containerLeft.className = "nav-container-left";
    const title = new Typography({ variant: "h1", children: "FASTMOVIE", className: "" });
    containerLeft.appendChild(title.render());
    const homeLink = new Typography({
      variant: "h5",
      children: "Home",
      onclick: () => {
        window.location.hash = "";
      },
      className: "",
    });
    containerLeft.appendChild(homeLink.render());
    const aboutLink = new Typography({
      variant: "h5",
      children: "About",
      onclick: () => {
        window.location.hash = "about";
      },
      className: "",
    });
    this.navigationContainer.appendChild(containerLeft);
    containerLeft.appendChild(aboutLink.render());
    this.navigationContainer.appendChild(
      new Switch({ setLightMode: this.setLightMode, isChecked: this.isLightMode }).render()
    );
    return this.navigationContainer;
  }
}

export default Navigation;
