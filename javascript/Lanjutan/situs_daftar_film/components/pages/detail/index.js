import { fetchApi } from "../../../utils/fetchApi.js";
import Button from "../../UI/Button/index.js";
import Typography from "../../UI/Typography/index.js";

class Detailpage {
  constructor(props) {
    this.state = {
      selectedItem: {},
      isLoading: true,
    };
    this.init();
  }

  init() {
    this.getDetailMovie();
    this.render();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getDetailMovie() {
    const queryString = window.location.hash.split("=")[1];
    const urlPath = `titles/${queryString}`;
    fetchApi("GET", urlPath).then((result) => {
      // console.log(result);
      this.setState({ selectedItem: result.results });
      this.setState({ isLoading: false });
    });
  }

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
