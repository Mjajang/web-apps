class Typography {
  constructor(props) {
    const { variant, children } = props;
    this.variant = variant;
    this.children = children;
  }

  VARIANTS = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
  };

  render() {
    const typographyContainer = document.createElement(this.VARIANTS[this.variant]);
    typographyContainer.innerHTML = this.children;
    return typographyContainer;
  }
}

export default Typography;
