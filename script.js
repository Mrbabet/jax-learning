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
