import Footer from "../../container/Footer/index.js";
import Navigation from "../../container/Navigation/index.js";
import Typography from "../../UI/Typography/index.js";

class AboutPage {
  constructor(parameters) {
    this.aboutContainer = document.createElement("div");
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.aboutContainer.innerHTML = "";
    const navigation = new Navigation();
    this.aboutContainer.appendChild(navigation.render());
    const title = new Typography({ variant: "h1", children: "About Page" });
    this.aboutContainer.appendChild(title.render());

    this.aboutContainer.appendChild(new Footer().render());
    return this.aboutContainer;
  }
}

export default AboutPage;
