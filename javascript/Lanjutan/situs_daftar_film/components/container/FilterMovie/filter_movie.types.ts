interface FilterMovieProps {
  submitFilter: () => void;
  isLoading: boolean;
  setType: (value: string) => void;
  setYear: (value: string) => void;
  type: string;
  year: string;
}

export default FilterMovieProps;
