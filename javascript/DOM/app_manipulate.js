/* Style Element */
var elem = document.getElementById("element-style");
console.log(elem);
elem.style.color = "red";
elem.className = "medium-text";

/* Attribute Element */
var attrib = document.getElementsByClassName("element-attribut")[0];
console.log(attrib);
attrib.setAttribute("class", "medium-text");
attrib.setAttribute("style", "color:blue; background-color:yellow;");
attrib.setAttribute("id", "attrib-id");
attrib.setAttribute("href", "https://google.com");
attrib.setAttribute("data-test", "test-001");
attrib.removeAttribute("href");
attrib.removeAttribute("id");

/* Add-Remove Element */
var addElemen = document.getElementById("add-element");
console.log(addElemen);

let newElement = document.createElement("h2");
newElement.textContent = "Hai..";
console.log(newElement);

// addElemen.appendChild(newElement);
// addElemen.removeChild(newElement);

let removeTitle = document.querySelector("h1");
// console.log(removeTitle);
// removeTitle.remove();
// addElemen.removeChild(removeTitle);

/* Event Listener */
const addButton = document.getElementById("add-button");
const inputEvent = document.getElementById("input-event");
const inputDate = document.getElementById("input-date");
const hoverDiv = document.getElementById("hoverme");
console.log(addButton);
console.log(inputEvent);
console.log(inputDate);
console.log(hoverDiv);
addButton.addEventListener("click", function () {
  alert("Hai");
  addElemen.appendChild(newElement);
});

addButton.addEventListener("mouseover", function () {
  addButton.style.backgroundColor = "red";
  addButton.style.color = "white";
  addButton.style.padding = "10px 20px";
  removeTitle.remove();
});

// inputEvent.addEventListener("input", printInput);
inputEvent.addEventListener("keydown", printInput);
inputDate.addEventListener("input", printInput);

function printInput(event) {
  console.log(event.target.value);
  console.log(event.target);
  console.log(event.type);
  console.log("event", event);
}

hoverDiv.addEventListener("mouseout", function (event) {
  hoverDiv.style.backgroundColor = "red";
  console.log(event.target);
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); //menghentikan proses submit / mencegah reload halaman
  alert("Form submitted!");
  console.log("event-form", event);
  console.log("event-form-target", event.target);
});

document.getElementById("agreeTerms").addEventListener("change", function (event) {
  // this.checked == event.target.checked
  console.log("event-target", event.target.checked);
  console.log("event", event);
  if (this.checked) {
    alert("Terima kasih telah menyetujui syarat dan ketentuan");
  } else {
    alert("Harap menyetujui syarat dan ketentuan");
  }
});

document.getElementById("mySelect").addEventListener("change", function (event) {
  // const selectedValue = event.target.value;
  const selectedValue = this.value;
  console.log("buah yang dipilih", selectedValue);

  if (selectedValue === "pisang") {
    console.log("buah favouritmu adalah pisang");
  }
});

window.addEventListener("load", function (event) {
  console.log("halaman sudah siap, selesai load");
});

window.addEventListener("resize", function (event) {
  console.log("Halaman tersize");
  console.log(window.innerHeight);
  // console.log(window.innerWidth);
});

window.addEventListener("scroll", function (event) {
  console.log("scroll");
  console.log(window.scrollY);
  // console.log(window.scrollX);
});
