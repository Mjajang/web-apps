import Button from "../../UI/Button/index.js";
import Typography from "../../UI/Typography/index.js";
import MovieItem from "../MovieItem/index.js";

class MovieList {
  constructor(props) {
    const { movieItems, loadMoreMovie } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
    this.movieWrapper = document.createElement("div");
    this.movieContainer.className = "movie-list";
    this.loadMoreMovie = loadMoreMovie;
  }

  render() {
    this.movieItems.map((movie) => {
      const movieItem = new MovieItem({ movie });
      this.movieContainer.appendChild(movieItem.render());
    });
    this.movieWrapper.appendChild(this.movieContainer);
    this.movieWrapper.appendChild(
      new Button({
        text: "Load More",
        variant: "primary",
        className: "load-more",
        onclick: () => this.loadMoreMovie(),
      }).render()
    );
    return this.movieWrapper;
  }
}

export default MovieList;
