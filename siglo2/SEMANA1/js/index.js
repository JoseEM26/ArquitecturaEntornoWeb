// /*parpadear*/
// let nombre = document.getElementById("nombre");


// function parpadear(){
//     let r = Math.floor(Math.random()*250);
//     let g = Math.floor(Math.random()*250);
//     let b = Math.floor(Math.random()*250);
//     nombre.style.color="rgb("+r+","+g+","+b+")";
    
// }

// setInterval(parpadear, 1000);

// /*Carrusel */

// let banner = document.getElementById("banner");

// c=1;

// function carrusel(){
//     c++;
//     if(c>4) c=1;
//     banner.setAttribute("src", "img/banner"+c+".jpg");  //img/bannerX.jpg
// }

// setInterval(carrusel, 1000);

// /*Acceder al nodo a través del selector de clase */

// function gira(e){
//     e.style.transform="rotate(360deg)";
//     e.style.transition="all 1s";
// }

// function retorna(e){
//     e.style.transform="rotate(0)";
//     e.style.transition="all 1s";
// }

// let pro=document.getElementsByClassName("productos");

// for(let i=0; i<pro.length;i++)
// {
//     pro[i].setAttribute("onmouseover", "gira(this)");
//     pro[i].setAttribute("onmouseout", "retorna(this)");
// }

// /*Fecha */

// let fecha = new Date();
// let year = fecha.getFullYear();
// document.getElementById("copy").innerHTML="&copy" + year;


// //llamando una función que se encuentra en otro archivo script
// document.body.setAttribute("onload", "mayorEdad()");



function parpadear(){
    let r=Math.floor(Math.random()*250);
    let g=Math.floor(Math.random()*250);
    let b=Math.floor(Math.random()*250);
    let titulo=document.getElementById("nombre");
    titulo.style.color="rgb("+r+","+g+","+b+")";
}
setInterval(parpadear,1000);



let c=0;
let banner=document.getElementById("banner");
const arreglo=["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg"];

function carrusel(){
c++;
if(c>arreglo.length-1)c=0;
banner.src=arreglo[c];
}
carrusel();
setInterval(carrusel,1000);




let fecha=new Date();
let año=fecha.getFullYear();
document.getElementById("copy").innerHTML="&copy"+año;



function girar(e){
    e.style.transform="rotate(360deg)"
    e.style.transition="all,1s"
}
function retorna(e){
    e.style.transform="rotate(0)"
    e.style.transition="all,1s"
}

let productos=document.getElementsByClassName("productos");

for(let i=0;i<productos.length;i++){
        productos[i].setAttribute("onmouseover","girar(this)");
        productos[i].setAttribute("onmouseout","retorna(this)");
    
}
















