import Typography from "../../UI/Typography/index.js";

class Footer {
  constructor(parameters) {
    this.footerContainer = document.createElement("div");
  }

  render() {
    this.footerContainer.innerHTML = "";
    const footer = new Typography({
      variant: "p",
      children: "Copyright 2024 fastcampus",
      className: "footer",
    });
    this.footerContainer.appendChild(footer.render());
    return this.footerContainer;
  }
}

export default Footer;
