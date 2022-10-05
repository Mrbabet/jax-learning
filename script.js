const menuBtn = document.querySelector(".burger-bar");
const hiddenMenu = document.querySelector(".main-nav");
const overflow = document.querySelector("body");
const sortBtn = document.querySelector(".sort-bar");
const sortContainer = document.querySelector(".sort-container");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("active");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", function () {
  hiddenMenu.classList.toggle("active");
  overflow.classList.toggle("active");
});

let sortOpen = false;
sortBtn.addEventListener("click", () => {
  if (!sortOpen) {
    sortContainer.classList.add("active");
    sortOpen = true;
  } else {
    sortContainer.classList.remove("active");
    sortOpen = false;
  }
});

const rangeInput = document.querySelectorAll(".input-range-slider input"),
  priceInput = document.querySelectorAll(".input-range-input input"),
  progress = document.querySelector(".slider .progress");

let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(priceInput[0].value),
      maxVal = parseInt(priceInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      rangeInput[0].value = minVal;
      rangeInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
