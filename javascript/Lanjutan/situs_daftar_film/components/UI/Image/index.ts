import ImageProps from "./image.types";

class ImageComponent {
  image: HTMLImageElement;
  constructor(props: ImageProps) {
    const { src, alt, classname } = props;
    this.image = document.createElement("img");
    this.image.src = src;
    this.image.alt = alt;
    this.image.className = classname;
  }

  render() {
    return this.image;
  }
}
export default ImageComponent;
