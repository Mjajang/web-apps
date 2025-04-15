import Footer from "../../container/Footer/index.ts";
import Navigation from "../../container/Navigation/index.ts";
import Typography from "../../UI/Typography/index.ts";
import AboutState from "./about.types.ts";

class AboutPage {
  state: AboutState;
  aboutContainer: HTMLDivElement;

  constructor() {
    this.state = {
      isLightMode: false,
    };
    this.aboutContainer = document.createElement("div");
    this.init();
  }

  init() {
    this.render();
  }

  setState(newState: AboutState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.aboutContainer.innerHTML = "";
    const navigation = new Navigation({
      setLightMode: (value: boolean) => this.setState({ isLightMode: value }),
      isLightMode: this.state.isLightMode,
    });
    this.aboutContainer.appendChild(navigation.render());
    const title = new Typography({ variant: "h1", children: "About Page", className: "" });
    this.aboutContainer.appendChild(title.render());

    this.aboutContainer.appendChild(new Footer().render());
    return this.aboutContainer;
  }
}

export default AboutPage;
