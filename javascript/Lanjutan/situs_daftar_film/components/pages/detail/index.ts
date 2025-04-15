import { fetchApi } from "../../../utils/fetchApi.ts";
import Button from "../../UI/Button/index.ts";
import Typography from "../../UI/Typography/index.ts";
import ImageComponent from "../../UI/Image/index.ts";
import Skeleton from "../../UI/Skeleton/index.ts";
import Navigation from "../../container/Navigation/index.ts";
import Footer from "../../container/Footer/index.ts";

class Detailpage {
  constructor(props) {
    this.state = {
      selectedItem: {},
      movieRate: {},
      isLoading: true,
      isLightMode: false,
    };
    this.detailContainer = document.createElement("div");
    this.init();
    window.addEventListener("hashchange", () => {
      if (window.location.hash.split("?")[0] === "#detail") {
        this.init();
      }
    });
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
    });

    const urlRating = `titles/${queryString}/ratings`;
    fetchApi("GET", urlRating).then((result) => {
      // console.log(result);
      this.setState({ movieRate: result.results });
    });
    this.setState({ isLoading: false });
  }

  render() {
    this.detailContainer.innerHTML = "";
    const navigation = new Navigation({
      setLightMode: (value) => this.setState({ isLightMode: value }),
      isLightMode: this.state.isLightMode,
    });
    this.detailContainer.appendChild(navigation.render());
    if (
      Object.keys(this.state.selectedItem).length > 0 &&
      Object.keys(this.state.movieRate).length > 0
    ) {
      this.detailContainer.appendChild(
        new ImageComponent({
          src: this.state.selectedItem.primaryImage?.url,
          alt: this.state.selectedItem.primaryImage?.caption.plainText,
          classname: "img-detail-cover",
        }).render()
      );

      const contentContainer = document.createElement("div");
      contentContainer.className = "content-container";
      contentContainer.appendChild(
        new ImageComponent({
          src: this.state.selectedItem.primaryImage?.url,
          alt: this.state.selectedItem.primaryImage?.caption.plainText,
          classname: "img-detail",
        }).render()
      );

      const contentDetail = document.createElement("div");
      contentDetail.className = "content-detail";
      contentDetail.appendChild(
        new Typography({
          variant: "h1",
          children: `Title: ${this.state.selectedItem.originalTitleText.text}`,
        }).render()
      );
      contentDetail.appendChild(
        new Typography({
          variant: "h2",
          children: `Release Year: ${this.state.selectedItem.releaseYear.year}`,
        }).render()
      );
      contentDetail.appendChild(
        new Typography({
          variant: "h2",
          children: `Rating: ${this.state.movieRate.averageRating}`,
        }).render()
      );
      contentDetail.appendChild(
        new Typography({
          variant: "h2",
          children: `Voters Count: ${this.state.movieRate.numVotes}`,
        }).render()
      );

      contentContainer.appendChild(contentDetail);
      this.detailContainer.appendChild(contentContainer);
    } else {
      this.detailContainer.appendChild(
        new Skeleton({
          width: "100%",
          height: "600px",
        }).render()
      );

      const contentContainer = document.createElement("div");
      contentContainer.className = "content-container";
      contentContainer.appendChild(
        new Skeleton({
          width: "300px",
          height: "300px",
        }).render()
      );

      const contentDetail = document.createElement("div");
      contentDetail.className = "content-detail";
      contentDetail.appendChild(
        new Skeleton({
          width: "300px",
          height: "60px",
        }).render()
      );
      contentDetail.appendChild(
        new Skeleton({
          width: "300px",
          height: "60px",
        }).render()
      );

      contentContainer.appendChild(contentDetail);
      this.detailContainer.appendChild(contentContainer);
    }

    this.detailContainer.appendChild(new Footer().render());
    return this.detailContainer;
  }
}

export default Detailpage;
