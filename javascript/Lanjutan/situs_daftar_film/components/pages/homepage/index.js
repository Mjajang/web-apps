import { fetchApi } from "../../../utils/fetchApi.js";
import FilterMovie from "../../container/FilterMovie/index.js";
import MovieList from "../../container/MovieList/index.js";
import Navigation from "../../container/Navigation/index.js";
import Button from "../../UI/Button/index.js";
import Typography from "../../UI/Typography/index.js";

class Homepage {
  constructor() {
    this.state = {
      count: 0,
      isLoading: false,
      filterType: "",
      filterYear: "",
      movieList: [],
      movie: [],
      page: 1,
      moviePage: 1,
    };
    this.homeContainer = document.createElement("div");
    this.init();
  }

  init() {
    if (window.location.hash === "") {
      // for initial get data
      // this.getDataMovies();
      this.render();
    }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  getDataMovies(pageParam = 1, type = "get") {
    this.setState({ isLoading: true });
    const page = type === "get" ? 1 : pageParam;
    let urlPath = `titles/x/upcoming?limit=4&page=${page}&sort=year.decr`;
    // add params
    if (this.state.filterType !== "") {
      urlPath += `&titleType=${this.state.filterType}`;
    } else if (this.state.filterYear !== "") {
      urlPath += `&year=${this.state.filterYear}`;
    }
    fetchApi("GET", urlPath).then((result) => {
      // console.log(result);
      if (type === "get") {
        this.setState({ movieList: result.results });
      } else {
        this.setState({ movieList: [...this.state.movieList, ...result.results] });
      }
    });

    const pageMovie = type === "get" ? 1 : pageParam;
    let year = "2024";
    let urlPathMovie = `titles?limit=4&page=${pageMovie}&sort=year.decr&year=${year}`;
    if (this.state.filterYear !== "") {
      urlPath += `&titleType=${this.state.filterType}`;
    } else if (this.state.filterYear !== "") {
      year += this.state.filterYear;
    }
    fetchApi("GET", urlPathMovie).then((result) => {
      // console.log(result);
      if (type === "get") {
        this.setState({ movie: result.results });
      } else {
        this.setState({ movie: [...this.state.movie, ...result.results] });
      }
    });

    this.setState({ isLoading: false });
  }

  loadMoreMovie(params) {
    this.setState({ isLoading: true });
    if (params === "upcoming") {
      const nextPage = this.state.page + 1;
      this.setState({ page: nextPage });
      this.getUpcomingMovies(nextPage, "load");
    } else {
      const nextMoviePage = this.state.moviePage + 1;
      this.setState({ moviePage: nextMoviePage });
      this.getYearMovies(nextMoviePage, "load");
    }
  }

  render() {
    this.homeContainer.innerHTML = "";
    const navigation = new Navigation({});
    const title = new Typography({ variant: "h1", children: "Movie Web" });
    const subTitle = new Typography({
      variant: "h2",
      children: "Using Vanilla",
      className: "caption2",
    });
    this.homeContainer.appendChild(navigation.render());
    this.homeContainer.appendChild(title.render());
    this.homeContainer.appendChild(subTitle.render());
    this.homeContainer.appendChild(
      new FilterMovie({
        submitFilter: () => this.getDataMovies(),
        setType: (value) => this.setState({ filterType: value }),
        setYear: (value) => this.setState({ filterYear: value }),
        type: this.state.filterType,
        year: this.state.filterYear,
        isLoading: this.state.isLoading,
      }).render()
    );
    const titleUpcoming = new Typography({ variant: "h1", children: "Upcoming Movie" });
    this.homeContainer.appendChild(titleUpcoming.render());
    this.homeContainer.appendChild(
      new MovieList({
        movieItems: this.state.movieList,
        loadMoreMovie: () => this.loadMoreMovie("upcoming"),
        isLoading: this.state.isLoading,
      }).render()
    );
    const titleThisYear = new Typography({ variant: "h1", children: "Movie of The Year" });
    this.homeContainer.appendChild(titleThisYear.render());
    this.homeContainer.appendChild(
      new MovieList({
        movieItems: this.state.movie,
        loadMoreMovie: () => this.loadMoreMovie("movie"),
        isLoading: this.state.isLoading,
      }).render()
    );
    return this.homeContainer;
  }
}

export default Homepage;
