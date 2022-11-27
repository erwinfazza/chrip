const toggleButton = document.getElementsByClassName("toggle-button")[0];
const NavLink = document.getElementsByClassName("nav-link")[0];

toggleButton.addEventListener("click", () => {
  NavLink.classList.toggle("active");
});
