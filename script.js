const menuBtn = document.querySelector(".burger-bar");
const hiddenMenu = document.querySelector(".main-nav");
const overflow = document.querySelector("body");

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
