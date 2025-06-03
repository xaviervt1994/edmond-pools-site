// Toggle mobile nav menu
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});
