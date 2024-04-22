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


// //boton comprar
// function confirmarCompra(productoSeleccionado) {
//     let productoElement = document.querySelector('.producto');
//     if (productoElement) {
//         let productos = document.querySelectorAll('.producto');
//         let producto = productos[productoSeleccionado - 1].textContent;
//         let mensaje = `Ud ha comprado ${producto}`;
//         alert(mensaje);
//     } else {
//         alert("No se ha encontrado información del producto.");
//     }
    
// }



function confirmarCompra(compraSeleccionada){
    let comprobacion=document.querySelector(".producto");
    if(comprobacion){
        let compras=document.querySelectorAll(".producto");
        let compra=compras[compraSeleccionada-1].textContent;
        let alerta=`usted compro un ${compra}`;
    alert(alerta);

    }
    


}











//fechaaaa


function fechaa(){
    let fecha = new Date();
let d = fecha.getDate();
let m = fecha.getMonth()+1;
let y = fecha.getFullYear();

if(d<10){
    d="0"+d;
   }
   if(m<10){
    m="0"+m;
    }
    if(y<10){
        y="0"+y;
    }
document.getElementById("fecha").textContent = d + "/" + m + "/" + y;
}
setInterval(fechaa,1000);




function tiempo(){
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundos = fecha.getSeconds(); 


  if(hora<10){
   hora="0"+hora;
  }
  if(minuto<10){
    minuto="0"+minuto;
   }
   if(segundos<10){
    segundos="0"+segundos;
   }

    document.getElementById("hora").textContent = hora + ":" + minuto + ":" + segundos;

  
}

setInterval(tiempo, 1000);


