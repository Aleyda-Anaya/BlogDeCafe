const btnMenu = document.getElementById("btn-menu");
const menuNav = document.getElementById("menu-nav");
const scrollTo = document.getElementsByClassName("scrollTo");
//./assets/icons/menu-hamburguesa.svg

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
  menuNav.classList.toggle("mostrar-menu");
  const srcImagen =  btnMenu.children[0].getAttribute("src")
  if(srcImagen === "./assets/icons/menu-hamburguesa.svg"){
    btnMenu.children[0].setAttribute("src", "./assets/icons/cerrar-menu.svg");
  }else{
    btnMenu.children[0].setAttribute("src", "./assets/icons/menu-hamburguesa.svg");
  }
}