const buttons = document.querySelectorAll("[data-carousel-button]");
const slideArray = document.querySelectorAll("slide");
const allDots = document.querySelectorAll(".dot");
// const dotOne = document.getElementById("dot1");
// const dotTwo = document.getElementById("dot2");
// const dotThree = document.getElementById("dot3");
// const dotFour = document.getElementById("dot4");
// const dotFive = document.getElementById("dot5");

let initialSlide = document.querySelector("[data-active]");
// if (currentSlide.id === "slideOne") {
//     removeActiveDot();
//     dotOne.classList.add("active");
//   }

// ScrollAuto();
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
    if (newSlide >= slides.children.length) newSlide = 0;

    slides.children[newSlide].dataset.active = true;
    delete activeSlide.dataset.active;
    currentSlide = activeSlide.nextElementSibling;

    // if (initialSlide.id === "slideOne") {
    //   removeActiveDot();
    //   dotOne.classList.add("active");
    // }
    // if (currentSlide.id === "slideTwo") {
    //   removeActiveDot();
    //   dotTwo.classList.add("active");
    //   console.log(currentSlide);
    // }
    // if (currentSlide.id === "slideThree") {
    //   removeActiveDot();
    //   dotThree.classList.add("active");
    //   console.log(currentSlide);
    // }
    // if (currentSlide.id === "slideFour") {
    //   removeActiveDot();
    //   dotFour.classList.add("active");
    //   console.log(currentSlide);
    // }
    // if (currentSlide.id === "slideFive") {
    //   removeActiveDot();
    //   dotFive.classList.add("active");
    //   console.log(currentSlide);
    //   console.log(activeSlide);
    // }
  });
});
console.log(slideArray);
function dotNav(a) {
  let currentSlide = document.querySelector("[data-active]");
  // delete currentSlide.dataset.active;
  removeActiveDot();
  a.classList.add("active");
  let currentDot = [...allDots].indexOf(a);
  console.log(currentDot);

  // document.querySelector();
}
// dotOne.addEventListener("click", () => {
//   let currentSlide = document.querySelector("[data-active]");
//   delete currentSlide.dataset.active;
//   removeActiveDot();
//   document.querySelector("#slideOne").dataset.active = true;
//   dotOne.classList.add("active");
// });
// dotTwo.addEventListener("click", () => {
//   let currentSlide = document.querySelector("[data-active]");
//   delete currentSlide.dataset.active;
//   removeActiveDot();
//   document.querySelector("#slideTwo").dataset.active = true;
//   dotTwo.classList.add("active");
// });
// dotThree.addEventListener("click", () => {
//   let currentSlide = document.querySelector("[data-active]");
//   delete currentSlide.dataset.active;
//   removeActiveDot();
//   document.querySelector("#slideThree").dataset.active = true;
//   dotThree.classList.add("active");
// });
// dotFour.addEventListener("click", () => {
//   let currentSlide = document.querySelector("[data-active]");
//   delete currentSlide.dataset.active;
//   removeActiveDot();
//   document.querySelector("#slideFour").dataset.active = true;
//   dotFour.classList.add("active");
// });
// dotFive.addEventListener("click", () => {
//   let currentSlide = document.querySelector("[data-active]");
//   delete currentSlide.dataset.active;
//   removeActiveDot();
//   document.querySelector("#slideFive").dataset.active = true;
//   dotFive.classList.add("active");
// });

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
