const btnMenu = document.getElementById("btn-menu");
const menuNav = document.getElementById("menu-nav");
const scrollTo = document.getElementsByClassName("scrollTo");

Array.from(scrollTo).forEach(el => {
  el.addEventListener("click", function (e) {
    const target = e.currentTarget.getAttribute("target");
    const sectionObjetivo = document.getElementById(target);
    const position = sectionObjetivo.offsetTop - 100;
    window.scrollTo({
      top: position, behavior: "smooth"
    })
  })
})

btnMenu.addEventListener("click", mostrarMenu);

function mostrarMenu (){
  menuNav.classList.toggle("mostrar-menu")
}