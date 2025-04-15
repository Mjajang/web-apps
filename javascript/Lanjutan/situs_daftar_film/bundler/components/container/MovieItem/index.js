import ImageComponent from "../../UI/Image/index.js";
import Typography from "../../UI/Typography/index.js";
class MovieItem {
    constructor(movie) {
        this.movie = movie;
        this.movieContainer = document.createElement("div");
        this.movie = movie;
        this.movieContainer.className = "movie-card";
        this.movieContainer.onclick = () => {
            window.location.hash = `detail?id=${this.movie.id}`;
        };
    }
    render() {
        var _a, _b;
        // console.log(this.movie);
        const divImage = document.createElement("div");
        divImage.className = "image-container";
        divImage.appendChild(new ImageComponent({
            src: (_a = this.movie.primaryImage) === null || _a === void 0 ? void 0 : _a.url,
            alt: (_b = this.movie.primaryImage) === null || _b === void 0 ? void 0 : _b.caption.plainText,
            classname: "img-movie",
        }).render());
        this.movieContainer.appendChild(divImage);
        const divInfo = document.createElement("div");
        divInfo.className = "info-container";
        this.movieContainer.appendChild(divInfo);
        divInfo.appendChild(new Typography({ variant: "h4", children: this.movie.titleText.text, className: "" }).render());
        divInfo.appendChild(new Typography({
            variant: "h5",
            children: this.movie.releaseYear.year.toString(),
            className: "",
        }).render());
        return this.movieContainer;
    }
}
export default MovieItem;
