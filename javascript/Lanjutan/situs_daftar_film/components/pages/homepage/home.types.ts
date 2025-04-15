interface HomeState {
  count: number;
  isLoading: boolean;
  filterType: string;
  filterYear: string;
  movieList: any[];
  movie: any[];
  page: number;
  moviePage: number;
  isLightMode: boolean;
}

export { HomeState };
