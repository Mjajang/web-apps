var elemen = document.getElementById("demo");
console.log(elemen);
elemen.textContent = "Hai world";
elemen.style.color = "red";

var demo1 = document.getElementsByClassName("container");
console.log(demo1[0]);
demo1[0].innerHTML = "<b>Hello World</b>";

var container = document.querySelector("ul #makan");
console.log(container);
container.className = "makan";
container.id = "makan-list";

var paragraf = document.querySelectorAll("p");
console.log(paragraf);
paragraf.forEach(function (item) {
  item.style.fontSize = "20px";
  item.style.color = "blue";
});

let tagNaming = document.getElementsByTagName("li");
const tagPertama = (tagNaming[0].innerText = "Apa kabar guys?");
console.log("List Tag Li", tagNaming);

let elementClosest = document.querySelector(".makan");
console.log("element closest", elementClosest);
const closestParent = elementClosest.closest("ul");
console.log("closest parent", closestParent);

const parent = document.querySelector(".body");
console.log(parent);
const children = parent.children;
console.log(children);
