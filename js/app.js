let header = document.querySelector("header"),
  hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});
