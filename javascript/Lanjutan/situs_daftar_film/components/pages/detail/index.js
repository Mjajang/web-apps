import Button from "../../UI/Button/index.js";
import Typography from "../../UI/Typography/index.js";

class Detailpage {
  constructor(props) {}

  render() {
    const detailContainer = document.createElement("div");
    const title = new Typography({ variant: "h1", children: "DetailPage" });
    detailContainer.appendChild(title.render());
    const homeButtonNavigate = new Button({
      text: "Go to Home Page",
      variant: "primary",
      onclick: () => {
        window.location.hash = "";
      },
    });
    detailContainer.appendChild(homeButtonNavigate.render());
    return detailContainer;
  }
}

export default Detailpage;
