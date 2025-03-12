import Typography from "../../UI/Typography/index.js";

class MovieList {
  constructor(props) {
    const { movieItems } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
  }

  render() {
    this.movieItems.map((movie) => {
      const movieTitle = new Typography({ variant: "h1", children: movie.originalTitleText.text });
      this.movieContainer.appendChild(movieTitle.render());
    });
    return this.movieContainer;
  }
}

export default MovieList;
