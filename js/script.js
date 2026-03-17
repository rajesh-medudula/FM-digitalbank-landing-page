const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-side");
const navList = document.querySelector(".nav-list");
const overlay = document.querySelector(".menu-overlay");

hamburger.addEventListener("click", () => {
  navList.classList.add("active");
  overlay.classList.add("active");
  hamburger.classList.add("hide");
  closeBtn.classList.add("active");

  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("hide");
  closeBtn.classList.remove("active");

  document.body.classList.remove("no-scroll");
});

overlay.addEventListener("click", () => {
  navList.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("hide");
  closeBtn.classList.remove("active");

  document.body.classList.remove("no-scroll");
});