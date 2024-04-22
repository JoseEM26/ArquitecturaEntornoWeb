/*parpadear*/

let texto = document.getElementById("nombre");

function parpadear() {
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    texto.style.color = "rgb(" + r + "," + g + "," + b + ")";
}
setInterval(parpadear,1000);

/*Carrusel*/
let c=0;
let banner = document.getElementById("banner");
function carrusel(){
    c++;
    if(c>4) c=1;
    banner.setAttribute("src", "img/banner"+c+".jpg");
}
setInterval(carrusel, 1000);
























/*Fecha*/
let fecha = new Date();
let year = fecha.getFullYear();
document.getElementById("copy").innerHTML="&copy;" + year;


document.body.setAttribute("onload", "mayorEdad()");

/*Accediendo al nodo a través de clases*/

function gira(e){
    e.style.transform="rotate(360deg)";
    e.style.transition="all 1s";
}

function retorna(e){
    e.style.transform="rotate(0deg)";
    e.style.transition="all 1s";
}



// Obtener todos los elementos con la clase "productos"
let productos = document.getElementsByClassName("productos");

// Iterar a través de los elementos y agregar los atributos "onmouseover" y "onmouseout"
for(var i=0; i<productos.length; i++)
{
    productos[i].setAttribute("onmouseover", "gira(this)");
    productos[i].setAttribute("onmouseout", "retorna(this)");
}





