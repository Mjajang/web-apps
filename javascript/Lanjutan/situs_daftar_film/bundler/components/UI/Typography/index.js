class Typography {
    constructor(props) {
        this.VARIANTS = {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            p: "p",
        };
        const { variant, children, className, onclick } = props;
        this.variant = variant;
        this.children = children;
        this.className = className;
        this.onclick = onclick;
    }
    handleClick() {
        if (this.onclick) {
            this.onclick();
        }
        else {
            return;
        }
    }
    render() {
        const typographyContainer = document.createElement(this.VARIANTS[this.variant]);
        typographyContainer.onclick = this.handleClick.bind(this);
        typographyContainer.className = this.className;
        typographyContainer.innerHTML = this.children;
        return typographyContainer;
    }
}
export default Typography;
