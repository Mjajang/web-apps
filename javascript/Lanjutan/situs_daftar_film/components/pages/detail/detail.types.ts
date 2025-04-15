import MovieItemProps from "../../container/MovieItem/movie_item.types";

interface MovieRate {
  averageRating: number;
  numVotes: number;
}

interface DetailProps {
  selectedItem?: MovieItemProps | null;
  movieRate?: MovieRate | null;
  isLoading: boolean;
  isLightMode: boolean;
}

export default DetailProps;
