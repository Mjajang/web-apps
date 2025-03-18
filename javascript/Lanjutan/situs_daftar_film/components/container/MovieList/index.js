import Typography from "../../UI/Typography/index.js";
import MovieItem from "../MovieItem/index.js";

class MovieList {
  constructor(props) {
    const { movieItems } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
    this.movieContainer.className = "movie-list";
  }

  render() {
    this.movieItems.map((movie) => {
      const movieItem = new MovieItem({ movie });
      this.movieContainer.appendChild(movieItem.render());
    });
    return this.movieContainer;
  }
}

export default MovieList;
