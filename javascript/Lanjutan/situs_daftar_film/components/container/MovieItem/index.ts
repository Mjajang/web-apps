import ImageComponent from "../../UI/Image/index.ts";
import Typography from "../../UI/Typography/index.ts";
import MovieItemProps from "./movie_item.types.ts";

class MovieItem {
  movie: MovieItemProps;
  movieContainer: HTMLDivElement;
  constructor(movie: MovieItemProps) {
    this.movie = movie;
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
      new Typography({ variant: "h4", children: this.movie.titleText.text, className: "" }).render()
    );
    divInfo.appendChild(
      new Typography({
        variant: "h5",
        children: this.movie.releaseYear.year.toString(),
        className: "",
      }).render()
    );
    return this.movieContainer;
  }
}

export default MovieItem;
