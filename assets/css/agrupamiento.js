const toggle = document.querySelector(".menu_toggle");
const menu = document.querySelector(".nav_contenedor_rutas");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});