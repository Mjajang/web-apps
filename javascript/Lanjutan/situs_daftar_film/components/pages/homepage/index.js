import { fetchApi } from "../../../utils/fetchApi.js";
import Button from "../../UI/Button/index.js";
import Typography from "../../UI/Typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
    };
    this.homeContainer = document.createElement("div");
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getDataMovies() {
    fetchApi("GET", "titles/x/upcoming").then((result) => {
      console.log(result);
    });
  }

  render() {
    this.homeContainer.innerHTML = "";
    this.getDataMovies();
    const title = new Typography({ variant: "h1", children: "HomePage" });
    this.homeContainer.appendChild(title.render());
    const homeButtonNavigate = new Button({
      text: "Go to Detail Page",
      variant: "primary",
      onclick: () => {
        window.location.hash = "detail";
      },
    });
    this.homeContainer.appendChild(homeButtonNavigate.render());
    this.homeContainer.appendChild(
      new Typography({
        variant: "p",
        children: "Count: " + this.state.count,
      }).render()
    );
    this.homeContainer.appendChild(
      new Button({
        text: "-",
        variant: "secondary",
        onclick: () => {
          this.setState({ count: this.state.count - 1 });
        },
      }).render()
    );
    this.homeContainer.appendChild(
      new Button({
        text: "+",
        variant: "secondary",
        onclick: () => {
          this.setState({ count: this.state.count + 1 });
        },
      }).render()
    );

    return this.homeContainer;
  }
}

export default Homepage;
