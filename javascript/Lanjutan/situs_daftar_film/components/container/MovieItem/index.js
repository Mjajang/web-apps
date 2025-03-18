import ImageComponent from "../../UI/Image/index.js";
import Typography from "../../UI/Typography/index.js";

class MovieItem {
  constructor(props) {
    const { movie } = props;
    this.movieContainer = document.createElement("div");
    this.movie = movie;
    this.movieContainer.className = "movie-card";
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

    this.movieContainer.appendChild(
      new Typography({ variant: "h4", children: this.movie.titleText.text }).render()
    );
    this.movieContainer.appendChild(
      new Typography({ variant: "h5", children: this.movie.releaseYear.year }).render()
    );
    return this.movieContainer;
  }
}

export default MovieItem;
