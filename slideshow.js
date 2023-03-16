"use strict";

let slides = document.getElementsByClassName("slide");
let currentSlide = 0;

function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].style.display = "none";
  slides[moveTo].style.display = "flex";

  currentSlide = moveTo;
}

document.getElementById("btn-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
  console.log(currentSlide);
});

document.getElementById("btn-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
  console.log(currentSlide);
});
