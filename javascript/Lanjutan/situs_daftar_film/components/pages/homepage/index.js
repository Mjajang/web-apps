import { fetchApi } from "../../../utils/fetchApi.js";
import FilterMovie from "../../container/FilterMovie/index.js";
import Button from "../../UI/Button/index.js";
import Typography from "../../UI/Typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
      isLoading: false,
      filterType: "",
      filterYear: "",
    };
    this.homeContainer = document.createElement("div");
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getDataMovies() {
    this.setState({ isLoading: true });
    let urlPath = "titles/x/upcoming";
    // add params
    if (this.state.filterType !== "") {
      urlPath += `?titleType=${this.state.filterType}`;
      if (this.state.filterYear !== "") {
        urlPath += `&year=${this.state.filterYear}`;
      }
    } else if (this.state.filterYear !== "") {
      urlPath += `?year=${this.state.filterYear}`;
    }
    fetchApi("GET", urlPath).then((result) => {
      console.log(result);
      this.setState({ isLoading: false });
    });
  }

  render() {
    this.homeContainer.innerHTML = "";
    const title = new Typography({ variant: "h1", children: "HomePage" });
    this.homeContainer.appendChild(title.render());
    this.homeContainer.appendChild(
      new FilterMovie({
        submitFilter: () => this.getDataMovies(),
        setType: (value) => this.setState({ filterType: value }),
        setYear: (value) => this.setState({ filterYear: value }),
        type: this.state.filterType,
        year: this.state.filterYear,
        isLoading: this.state.isLoading,
      }).render()
    );
    return this.homeContainer;
  }
}

export default Homepage;
