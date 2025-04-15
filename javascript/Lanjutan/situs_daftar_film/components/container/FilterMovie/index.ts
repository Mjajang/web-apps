import Button from "../../UI/Button/index.ts";
import Select from "../../UI/Select/index.ts";
import FilterMovieProps from "./filter_movie.types.ts";

class FilterMovie {
  filterContainer: HTMLDivElement;
  submitFilter: () => void;
  isLoading: boolean;
  type: string;
  year: string;
  setType: (value: string) => void;
  setYear: (value: string) => void;

  constructor(props: FilterMovieProps) {
    const { submitFilter, isLoading, type, year, setType, setYear } = props;
    this.submitFilter = submitFilter;
    this.isLoading = isLoading;
    this.type = type;
    this.year = year;
    this.setType = setType;
    this.setYear = setYear;
    this.filterContainer = document.createElement("div");
  }

  render() {
    this.filterContainer.className = "filter-container";
    const homeButtonSearch = new Button({
      text: "Search",
      variant: "primary",
      onclick: () => this.submitFilter(),
      disabled: this.isLoading,
    });
    this.filterContainer.appendChild(
      new Select({
        options: [
          { value: "", text: "Select Type" },
          { value: "movie", text: "Movie" },
          { value: "short", text: "Short" },
        ],
        selectedValue: this.type,
        onChange: (value) => {
          this.setType(value);
        },
        width: "100px",
      }).render()
    );
    this.filterContainer.appendChild(
      new Select({
        options: [
          { value: "", text: "Select Year" },
          { value: "2025", text: "2025" },
          { value: "2024", text: "2024" },
          { value: "2023", text: "2023" },
          { value: "2022", text: "2022" },
          { value: "2021", text: "2021" },
          { value: "2020", text: "2020" },
          { value: "2019", text: "2019" },
        ],
        selectedValue: this.year,
        onChange: (value) => {
          this.setYear(value);
        },
        width: "200px",
      }).render()
    );
    this.filterContainer.appendChild(homeButtonSearch.render());

    return this.filterContainer;
  }
}

export default FilterMovie;
