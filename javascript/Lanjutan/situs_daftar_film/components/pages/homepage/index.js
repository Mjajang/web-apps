import Button from "../../UI/Button/index.js";
import Typography from "../../UI/Typography/index.js";

class Homepage {
  constructor(props) {}

  render() {
    const homeContainer = document.createElement("div");
    const title = new Typography({ variant: "h1", children: "HomePage" });
    homeContainer.appendChild(title.render());
    const homeButtonNavigate = new Button({
      text: "Go to Detail Page",
      variant: "primary",
      onclick: () => {
        window.location.hash = "detail";
      },
    });
    homeContainer.appendChild(homeButtonNavigate.render());
    return homeContainer;
  }
}

export default Homepage;
