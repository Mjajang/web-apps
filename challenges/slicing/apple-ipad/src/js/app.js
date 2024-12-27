var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,

  // Navigation Custom
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});
function toggleAccordion(event) {
  const question = event.currentTarget;
  const content = question.nextElementSibling;
  const svgIcon = question.querySelector("svg");
  const imageAccordion = document.getElementById("image-accordion");

  // close other toggle
  document.querySelectorAll(".accordion .content").forEach((item) => {
    item.style.maxHeight = null;
    item.previousElementSibling.querySelector("svg").classList.remove("rotate-180");
  });

  // toggle current accordion
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    svgIcon.classList.remove("rotate-180");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    svgIcon.classList.add("rotate-180");
  }

  switch (question.id) {
    case "ipad-iphone":
      imageAccordion.src = "./assets/accordion/ipad-iphone.png";
      break;
    case "ipad-mac":
      imageAccordion.src = "./assets/accordion/ipad-mac.png";
      break;
    case "ipad-watch":
      imageAccordion.src = "./assets/accordion/ipad-watch.jpg";
      break;
  }
}
