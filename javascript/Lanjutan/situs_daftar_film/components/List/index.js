class ListComponent {
  constructor() {
    this.listItems = ["List 1", "List 2", "List 3"];
  }

  render() {
    const ul = document.createElement("ul");
    this.listItems.map((item) => {
      const li = document.createElement("li");
      li.innerText = item;
      ul.appendChild(li);
    });
    return ul;
  }
}

export default ListComponent;
