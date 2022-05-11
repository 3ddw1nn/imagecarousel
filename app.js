const buttons = document.querySelectorAll("[data-carousel-button]");
const slidesArray = document.querySelectorAll(".slide");
const allDots = document.querySelectorAll(".dot");

const firstDot = document.querySelector("#firstDot");

ScrollAuto();
buttons.forEach((eachButton) => {
  eachButton.addEventListener("click", () => {
    let currentSlide = "";
    const repeat = eachButton.dataset.carouselButton === "next" ? 1 : -1;
    const slides = eachButton
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newSlide = [...slides.children].indexOf(activeSlide) + repeat;
    if (newSlide < 0) newSlide = slides.children.length - 1;
    if (newSlide >= slides.children.length) {
      newSlide = 0;
    }

    slides.children[newSlide].dataset.active = true;
    delete activeSlide.dataset.active;
    currentSlide = activeSlide.nextElementSibling;

    allDots.forEach((eachDot) => {
      if (currentSlide == null) {
        currentSlide = "";
      }
      if (activeSlide.id === "4") {
        removeActiveDot();
        firstDot.classList.add("active");
      } else {
        initialSlide = "";
      }
      if (parseInt(eachDot.dataset.id) === parseInt(currentSlide.id)) {
        removeActiveDot();
        eachDot.classList.add("active");
      }
    });
  });
});
function dotNav(a) {
  let currentSlide = document.querySelector("[data-active]");
  delete currentSlide.dataset.active;
  removeActiveDot();
  a.classList.add("active");
  let currentDot = [...allDots].indexOf(a);
  slidesArray.forEach((eachSlide) => {
    if (parseInt(eachSlide.id) === currentDot) {
      eachSlide.dataset.active = true;
    }
  });
}

function removeActiveDot() {
  allDots.forEach((eachDot) => {
    eachDot.classList.remove("active");
  });
}

function ScrollAuto() {
  auto = setInterval(function () {
    document.querySelector(".next").click();
  }, 10000);
}
