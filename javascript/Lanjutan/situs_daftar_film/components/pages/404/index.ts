import Typography from "../../UI/Typography/index.ts";

class NotFound {
  constructor(parameters) {
    this.notfoundContainer = document.createElement("div");
  }

  render() {
    this.notfoundContainer.innerHTML = "";
    const notfound = new Typography({
      variant: "h1",
      children: "This page not developed yet :(",
      className: "not-found",
    });
    this.notfoundContainer.appendChild(notfound.render());
    return this.notfoundContainer;
  }
}

export default NotFound;
