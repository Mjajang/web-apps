import SkeletonProps from "./skeleton.types";

class Skeleton {
  skeletonContainer: HTMLDivElement;
  skeletonChild: HTMLDivElement;
  width: string;
  height: string;

  constructor({ width, height }: SkeletonProps) {
    this.width = width;
    this.height = height;

    this.skeletonContainer = document.createElement("div");
    this.skeletonContainer.className = "skeleton-container";
    this.skeletonContainer.style.width = this.width;
    this.skeletonContainer.style.height = this.height;

    this.skeletonChild = document.createElement("div");
    this.skeletonChild.className = "skeleton-header";
    this.skeletonChild.style.width = this.width;
    this.skeletonChild.style.height = this.height;
    this.skeletonContainer.appendChild(this.skeletonChild);
  }

  render() {
    return this.skeletonContainer;
  }
}

export default Skeleton;
