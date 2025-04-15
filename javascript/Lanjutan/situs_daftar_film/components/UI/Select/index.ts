import SelectProps from "./select.types";

class Select {
  options: { value: string; text: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  width: string;

  constructor(props: SelectProps) {
    const { options, selectedValue, onChange, width } = props;
    this.options = options;
    this.selectedValue = selectedValue;
    this.onChange = onChange;
    this.width = width;
  }

  render() {
    const select = document.createElement("select");
    select.className = "form-select";
    select.style.width = this.width;
    this.options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      if (option.value === this.selectedValue) {
        optionElement.selected = true;
      }
      select.appendChild(optionElement);
    });
    select.addEventListener("change", (event) => {
      const target = event.target as HTMLSelectElement | null;
      if (target) this.onChange(target.value);
    });

    return select;
  }
}

export default Select;
