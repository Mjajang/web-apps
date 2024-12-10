document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const items = document.querySelectorAll(".carousel-item");
  const controls = document.querySelectorAll(".carousel-control .items");
  function setClasses(newIndex) {
    items.forEach((item, i) => {
      // i = index yakni 0 awalnya
      item.classList.remove("active", "previous", "next", "move-left", "move-right", "enter-left", "enter-right");

      if (i === newIndex) {
        item.classList.add("active");
      } else if (i === (newIndex - 1 + items.length) % items.length) {
        item.classList.add("previous");
      } else if (i === (newIndex + 1) % items.length) {
        item.classList.add("next");
      }
    });

    controls.forEach((control, i) => {
      control.classList.toggle("active", i === newIndex);
    });

    currentIndex = newIndex;
  }

  function showSlide(newIndex) {
    if (newIndex === currentIndex) return;
    const currentSlide = items[currentIndex];
    const newSlide = items[newIndex];
    // transition direction
    const isNext = newIndex > currentIndex || (currentIndex === items.length - 1 && newIndex === 0);
    // remove existing transistion
    currentSlide.classList.remove("move-left", "move-right", "enter-left", "enter-right");
    newSlide.classList.remove("move-left", "move-right", "enter-left", "enter-right");
    // apply transition class
    if (isNext) {
      currentSlide.classList.add("move-left");
      newSlide.classList.add("enter-right");
    } else {
      currentSlide.classList.add("move-right");
      newSlide.classList.add("enter-left");
    }
    setTimeout(() => {
      setClasses(newIndex);
    }, 500); // transition duration 500 => 0.5s
  }

  function goToNextSlide() {
    const newIndex = (currentIndex + 1) % items.length;
    showSlide(newIndex);
  }

  function goToPreviousSlide() {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(newIndex);
  }

  controls.forEach((control, i) => {
    control.addEventListener("click", () => {
      const index = parseInt(control.getAttribute("data-index"));
      if (!isNaN(index)) {
        showSlide(index);
      }
    });
  });

  items.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("next")) {
        goToNextSlide();
      } else if (item.classList.contains("previous")) {
        goToPreviousSlide();
      }
    });
  });

  setClasses(0);
  // console.log("items", items);
  // console.log("items length", items.length);
});

// Javascript Toggle Menu
document.querySelector(".navbar-toggle").addEventListener("click", function () {
  // console.log("navbar-toggle clicked");
  const navbarMobile = document.getElementById("navbar-mobile");
  const closeToggle = document.getElementById("close-toggle");
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  closeToggle.setAttribute("aria-expanded", !isExpanded);
  navbarMobile.classList.toggle("active");
  document.body.classList.toggle("overflow-hidden"); //.toggle is used to add or remove a class and classList is used for getting the classes
});

// Javascript Close Menu
document.querySelector(".close-toggle").addEventListener("click", function () {
  // console.log("close-toggle clicked");
  const navbarMobile = document.getElementById("navbar-mobile");
  const closeToggle = document.getElementById("close-toggle");
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  closeToggle.setAttribute("aria-expanded", !isExpanded);
  navbarMobile.classList.toggle("active");
  document.body.classList.toggle("overflow-hidden");
});

// Accordion
let accordion = document.getElementsByClassName("accordion");
// console.log("accordion", accordion);
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    // console.log("accordion clicked", accordion[i]);
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    // console.log(accordion[i], panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
