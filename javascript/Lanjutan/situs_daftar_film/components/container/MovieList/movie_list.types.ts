import MovieItemProps from "../MovieItem/movie_item.types";

interface MovieListProps {
  movieItems: MovieItemProps[];
  loadMoreMovie: () => void;
  isLoading: boolean;
}

export default MovieListProps;
