import { fetchApi } from "../../../utils/fetchApi.js";
import Typography from "../../UI/Typography/index.js";
import ImageComponent from "../../UI/Image/index.js";
import Skeleton from "../../UI/Skeleton/index.js";
import Navigation from "../../container/Navigation/index.js";
import Footer from "../../container/Footer/index.js";
class Detailpage {
    constructor() {
        this.state = {
            selectedItem: null,
            movieRate: null,
            isLoading: true,
            isLightMode: false,
        };
        this.detailContainer = document.createElement("div");
        this.init();
        window.addEventListener("hashchange", () => {
            if (window.location.hash.split("?")[0] === "#detail") {
                this.init();
            }
        });
    }
    init() {
        this.getDetailMovie();
        this.render();
    }
    setState(newState) {
        this.state = Object.assign(Object.assign({}, this.state), newState);
        this.render();
    }
    getDetailMovie() {
        const queryString = window.location.hash.split("=")[1];
        const urlPath = `titles/${queryString}`;
        fetchApi("GET", urlPath).then((result) => {
            // console.log(result);
            this.setState(Object.assign(Object.assign({}, this.state), { selectedItem: result.results }));
        });
        const urlRating = `titles/${queryString}/ratings`;
        fetchApi("GET", urlRating).then((result) => {
            // console.log(result);
            this.setState(Object.assign(Object.assign({}, this.state), { movieRate: result.results }));
        });
        this.setState(Object.assign(Object.assign({}, this.state), { isLoading: false }));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        this.detailContainer.innerHTML = "";
        const navigation = new Navigation({
            setLightMode: (value) => this.setState(Object.assign(Object.assign({}, this.state), { isLightMode: value })),
            isLightMode: this.state.isLightMode,
        });
        this.detailContainer.appendChild(navigation.render());
        if (Object.keys((_a = this.state.selectedItem) !== null && _a !== void 0 ? _a : []).length > 0 &&
            Object.keys((_b = this.state.movieRate) !== null && _b !== void 0 ? _b : []).length > 0) {
            this.detailContainer.appendChild(new ImageComponent({
                src: (_e = (_d = (_c = this.state.selectedItem) === null || _c === void 0 ? void 0 : _c.primaryImage) === null || _d === void 0 ? void 0 : _d.url) !== null && _e !== void 0 ? _e : "",
                alt: (_h = (_g = (_f = this.state.selectedItem) === null || _f === void 0 ? void 0 : _f.primaryImage) === null || _g === void 0 ? void 0 : _g.caption.plainText) !== null && _h !== void 0 ? _h : "",
                classname: "img-detail-cover",
            }).render());
            const contentContainer = document.createElement("div");
            contentContainer.className = "content-container";
            contentContainer.appendChild(new ImageComponent({
                src: (_l = (_k = (_j = this.state.selectedItem) === null || _j === void 0 ? void 0 : _j.primaryImage) === null || _k === void 0 ? void 0 : _k.url) !== null && _l !== void 0 ? _l : "",
                alt: (_p = (_o = (_m = this.state.selectedItem) === null || _m === void 0 ? void 0 : _m.primaryImage) === null || _o === void 0 ? void 0 : _o.caption.plainText) !== null && _p !== void 0 ? _p : "",
                classname: "img-detail",
            }).render());
            const contentDetail = document.createElement("div");
            contentDetail.className = "content-detail";
            contentDetail.appendChild(new Typography({
                variant: "h1",
                children: `Title: ${(_q = this.state.selectedItem) === null || _q === void 0 ? void 0 : _q.originalTitleText.text}`,
                className: "",
            }).render());
            contentDetail.appendChild(new Typography({
                variant: "h2",
                children: `Release Year: ${(_r = this.state.selectedItem) === null || _r === void 0 ? void 0 : _r.releaseYear.year}`,
                className: "",
            }).render());
            contentDetail.appendChild(new Typography({
                variant: "h2",
                children: `Rating: ${(_s = this.state.movieRate) === null || _s === void 0 ? void 0 : _s.averageRating}`,
                className: "",
            }).render());
            contentDetail.appendChild(new Typography({
                variant: "h2",
                children: `Voters Count: ${(_t = this.state.movieRate) === null || _t === void 0 ? void 0 : _t.numVotes}`,
                className: "",
            }).render());
            contentContainer.appendChild(contentDetail);
            this.detailContainer.appendChild(contentContainer);
        }
        else {
            this.detailContainer.appendChild(new Skeleton({
                width: "100%",
                height: "600px",
            }).render());
            const contentContainer = document.createElement("div");
            contentContainer.className = "content-container";
            contentContainer.appendChild(new Skeleton({
                width: "300px",
                height: "300px",
            }).render());
            const contentDetail = document.createElement("div");
            contentDetail.className = "content-detail";
            contentDetail.appendChild(new Skeleton({
                width: "300px",
                height: "60px",
            }).render());
            contentDetail.appendChild(new Skeleton({
                width: "300px",
                height: "60px",
            }).render());
            contentContainer.appendChild(contentDetail);
            this.detailContainer.appendChild(contentContainer);
        }
        this.detailContainer.appendChild(new Footer().render());
        return this.detailContainer;
    }
}
export default Detailpage;
