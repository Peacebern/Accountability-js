const menuIcon = document.querySelector(".mb-menu");
const navItems = document.querySelector(".nav-items");

menuIcon.addEventListener("click", () => {
  navItems.classList.toggle("show");
});
