/*parpadear*/

let texto = document.getElementById("nombre");

function parpadear() {
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    texto.style.color = "rgb(" + r + "," + g + "," + b + ")";
}
setInterval(parpadear, 1000);

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

// Este bucle recorre todos los elementos con la clase "productos" en el documento
for(var i=0; i<document.getElementsByClassName("productos").length; i++)
{
    // A cada elemento, se agrega un atributo "onmouseover" que llamará a la función "gira" cuando el mouse esté sobre el elemento
    document.getElementsByClassName("productos")[i].setAttribute("onmouseover", "gira(this)");
    // A cada elemento, se agrega un atributo "onmouseout" que llamará a la función "retorna" cuando el mouse salga del elemento
    document.getElementsByClassName("productos")[i].setAttribute("onmouseout", "retorna(this)");
}

/*forma optimizada*/
/*
// Obtener todos los elementos con la clase "productos"
let productos = document.getElementsByClassName("productos");

// Iterar a través de los elementos y agregar los atributos "onmouseover" y "onmouseout"
for(var i=0; i<productos.length; i++)
{
    productos[i].setAttribute("onmouseover", "gira(this)");
    productos[i].setAttribute("onmouseout", "retorna(this)");
}
*/


/*

Iterar es un término utilizado en programación para describir el proceso de repetir una serie de acciones o instrucciones en una secuencia. En esencia, es realizar una operación o acción repetidamente sobre un conjunto de elementos. Cada repetición de la acción se llama una "iteración". La idea fundamental es realizar la misma operación varias veces, generalmente en un bucle, para lograr un objetivo específico.

En la mayoría de los casos, la iteración implica recorrer una colección de elementos, como una lista, un arreglo, un conjunto de datos, etc., y realizar alguna acción en cada uno de ellos.

Por ejemplo, en el contexto de un bucle for en JavaScript, la iteración se refiere a ejecutar el bloque de código dentro del bucle para cada valor de la variable de control del bucle. Cada vez que el bloque de código se ejecuta con un nuevo valor de la variable de control, se está realizando una iteración.



*/

for (var i = 0; i < 5; i++) {
    console.log("número " + (i));
}


