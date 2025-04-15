import Button from "../../UI/Button/index.js";
import Loader from "../../UI/Loader/index.js";
import Typography from "../../UI/Typography/index.js";
import MovieItem from "../MovieItem/index.js";
import MovieItemProps from "../MovieItem/movie_item.types.js";
import MovieListProps from "./movie_list.types.js";

class MovieList {
  movieContainer: HTMLDivElement;
  movieWrapper: HTMLDivElement;
  movieItems: MovieItemProps[];
  loadMoreMovie: () => void;
  isLoading: boolean;

  constructor(props: MovieListProps) {
    const { movieItems, loadMoreMovie, isLoading } = props;
    this.movieItems = movieItems;
    this.movieContainer = document.createElement("div");
    this.movieWrapper = document.createElement("div");
    this.movieContainer.className = "movie-list";
    this.loadMoreMovie = loadMoreMovie;
    this.isLoading = isLoading;
  }

  render() {
    this.movieItems.map((movie) => {
      const movieItem = new MovieItem(movie);
      this.movieContainer.appendChild(movieItem.render());
    });
    this.movieWrapper.appendChild(this.movieContainer);
    if (this.movieItems.length > 0) {
      this.movieWrapper.appendChild(
        new Button({
          text: this.isLoading ? new Loader().render() : "Load More",
          variant: "primary",
          className: "load-more",
          onclick: () => this.loadMoreMovie(),
          disabled: this.isLoading,
        }).render()
      );
    }
    return this.movieWrapper;
  }
}

export default MovieList;
