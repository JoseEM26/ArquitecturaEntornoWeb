let boton = document.getElementById("hamburger");
let aside = document.getElementById("padre"); // Cambia el ID a "padre"

boton.addEventListener("click", () => {
    boton.classList.toggle("is-active");
    aside.classList.toggle("is-active");
});
