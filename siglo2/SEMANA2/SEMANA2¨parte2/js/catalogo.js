//variable global cambio
let cambio = 0;
let impuesto = 0;

function cambioMoneda(){
    if(cambio == 0){
        enDolar();
    }
    else if(cambio == 1){
        enSoles();
    }
}

function cambioImpuesto(){
    if(impuesto == 0){
        conImpuestos();
    }
    else if(impuesto == 1){
        sinImpuestos();
    }
}
//FUNCIÓN CON PARÁMETROS
//Precio en dólares:
function enDolar(tipo) {
    while (parseFloat(tipo) != tipo) {
        tipo = prompt('Introduzca tipo de cambio: Solo números', '', '');
    }


    let soles = document.getElementById('precio').innerHTML;
    let dolares = parseFloat(soles) / tipo;
    document.getElementById('precio').innerHTML = dolares.toFixed(2);
    document.getElementById('texto').innerHTML = "Precio US$ :";
    document.getElementById('dolares').innerHTML = "S/";
    cambio = 1;
}
//Precio en soles
function enSoles(tipo) {
    while (parseFloat(tipo) != tipo) {
        tipo = prompt('Introduzca tipo de cambio: Solo números', '', '');
    }


    let soles = document.getElementById('precio').innerHTML;
    let dolares = parseFloat(soles) * tipo;
    document.getElementById('precio').innerHTML = dolares.toFixed(2);
    document.getElementById('texto').innerHTML = "Precio S/ :";
    document.getElementById('dolares').innerHTML = "US$";
    cambio = 0;
}


//FUNCIÓN SIMPLE

function conImpuestos() {
    var precioSin = document.getElementById('precio').innerHTML;
    var precioCon = parseFloat(precioSin) * 1.18;
    document.getElementById('precio').innerHTML = precioCon.toFixed(2);
    document.getElementById('texto').innerHTML = "Precio inc. IGV: ";
    impuesto = 1;
}

function sinImpuestos() {
    var precioSin = document.getElementById('precio').innerHTML;
    var precioCon = parseFloat(precioSin) / 1.18;
    document.getElementById('precio').innerHTML = precioCon.toFixed(2);
    document.getElementById('texto').innerHTML = "Precio sin IGV: ";
    impuesto = 0;
}



function confirmarCompra(productoSeleccionado) {
    const productoElement = document.querySelector('.producto');
    if (productoElement) {
        const productos = document.querySelectorAll('.producto');
        const producto = productos[productoSeleccionado - 1].textContent;
        const mensaje = `Ud ha comprado ${producto}`;
        alert(mensaje);
    } else {
        alert("No se ha encontrado información del producto.");
    }
    
}

//En esta función, seleccionamos todos los elementos con la clase "producto" y luego utilizamos el argumento productoSeleccionado para acceder al producto correcto dentro de la lista de productos y mostrar el mensaje apropiado.


/* volvemos la función anterior a función de flecha
const confirmarCompra = (productoSeleccionado) => {
    const productoElements = document.querySelectorAll('.producto');
    if (productoElements.length >= productoSeleccionado) {
        const producto = productoElements[productoSeleccionado - 1].textContent;
        const mensaje = `Ud ha comprado ${producto}`;
        alert(mensaje);
    } else {
        alert("No se ha encontrado información del producto.");
    }
};

//En esta versión, hemos cambiado function confirmarCompra a const confirmarCompra para crear una función de flecha. Además, hemos utilizado document.querySelectorAll('.producto') para obtener todos los elementos con la clase "producto" en lugar de document.querySelector('.producto') para asegurarnos de obtener todos los productos disponibles. Luego, comprobamos si el número de producto seleccionado está dentro del rango válido antes de acceder al producto correspondiente. La función de flecha funcionará de la misma manera que la versión anterior, pero en una sintaxis más concisa.
*/



/*FECHA Y HORA */

//let fecha = new Date().getFullYear();
//document.getElementById("copy").innerHTML="&copy;" + fecha;

// let fecha = new Date();
// let d = fecha.getDate();
// let m = fecha.getMonth()+1;
// let y = fecha.getFullYear();

// document.getElementById("fecha").textContent = d + "/" + m + "/" + y;

// function tiempo(){
//     let fecha = new Date();
//     let h = fecha.getHours();
//     let m = fecha.getMinutes();
//     let s = fecha.getSeconds(); 
//     document.getElementById("hora").textContent = h + ":" + m + ":" + s;
// }

// setInterval(tiempo, 1000);



