var navMain = document.querySelector(".site-nav");
var navToggle = document.querySelector(".page-header__toggle");

navMain.classList.add("site-nav--closed");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("site-nav--closed")) {
    navMain.classList.remove("site-nav--closed");
    navToggle.classList.remove("toggle");
    navToggle.classList.add("toggle--opened");
  } else {
    navMain.classList.add("site-nav--closed");
    navToggle.classList.remove("toggle--opened");
    navToggle.classList.add("toggle");
  }
});
