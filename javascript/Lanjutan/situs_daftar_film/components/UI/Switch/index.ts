import SwitchProps from "./switch.types";

class Switch {
  switchButton: HTMLInputElement;
  switchLabel: HTMLLabelElement;
  switchContainer: HTMLDivElement;
  setLightMode: (isChecked: boolean) => void;

  constructor({ setLightMode, isChecked }: SwitchProps) {
    this.switchButton = document.createElement("input") as HTMLInputElement;
    this.switchButton.type = "checkbox";
    this.switchButton.id = "switch-toggle";
    this.switchButton.className = "switch-toggle";
    this.switchButton.checked = isChecked;

    this.switchLabel = document.createElement("label") as HTMLLabelElement;
    this.switchLabel.htmlFor = "switch-toggle";
    this.switchLabel.className = "switch-label";

    this.switchContainer = document.createElement("div") as HTMLDivElement;
    this.switchContainer.className = "switch-container";
    this.switchContainer.appendChild(this.switchButton);
    this.switchContainer.appendChild(this.switchLabel);

    this.attachEventListener();

    this.setLightMode = setLightMode;
  }

  attachEventListener() {
    this.switchButton.addEventListener("change", () => {
      this.onChange(this.switchButton.checked);
    });
  }

  onChange(isChecked: boolean) {
    // console.log("Switch state changed", isChecked);
    this.setLightMode(isChecked);
  }

  render() {
    return this.switchContainer;
  }
}
export default Switch;
