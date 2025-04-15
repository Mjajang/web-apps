import ImageComponent from "../../UI/Image/index.ts";
import Typography from "../../UI/Typography/index.ts";

class MovieItem {
  constructor(props) {
    const { movie } = props;
    this.movieContainer = document.createElement("div");
    this.movie = movie;
    this.movieContainer.className = "movie-card";
    this.movieContainer.onclick = () => {
      window.location.hash = `detail?id=${this.movie.id}`;
    };
  }

  render() {
    // console.log(this.movie);
    const divImage = document.createElement("div");
    divImage.className = "image-container";
    divImage.appendChild(
      new ImageComponent({
        src: this.movie.primaryImage?.url,
        alt: this.movie.primaryImage?.caption.plainText,
        classname: "img-movie",
      }).render()
    );
    this.movieContainer.appendChild(divImage);
    const divInfo = document.createElement("div");
    divInfo.className = "info-container";
    this.movieContainer.appendChild(divInfo);

    divInfo.appendChild(
      new Typography({ variant: "h4", children: this.movie.titleText.text }).render()
    );
    divInfo.appendChild(
      new Typography({ variant: "h5", children: this.movie.releaseYear.year }).render()
    );
    return this.movieContainer;
  }
}

export default MovieItem;
