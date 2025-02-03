function toggleMenu() {
  const menu = document.querySelector(".a-links");
  menu.classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".a-links");
  const burgerIcon = document.querySelector(".burger-icon");

  if (
    !menu.contains(event.target) &&
    !burgerIcon.contains(event.target) &&
    menu.classList.contains("show")
  ) {
    menu.classList.remove("show");
  }
});
