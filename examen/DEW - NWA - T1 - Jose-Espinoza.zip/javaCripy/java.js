

let tite=document.getElementById("titulo");

function parpadeo(){
    let r=Math.floor(Math.random()*150);
    let g=Math.floor(Math.random()*150);
    let b=Math.floor(Math.random()*150);
    tite.style.color="rgb("+r+","+g+","+b+")";
    setTimeout(parpadeo,1000);
}




let imagen=document.getElementById("imgcab");
 let c=0;
function carrusel(){
    c++;
    if(c>6)c=1;
    imagen.setAttribute("src","img/img"+c+".jpg");
    setTimeout(carrusel,1000);

}



function reloj(){
    let fecha=new Date();
    let hora=fecha.getHours();
    let minuto=fecha.getMinutes();
    let seg=fecha.getSeconds();
    
    
    if(hora<10){
        hora="0"+hora;
    }
    if(minuto<10){
        minuto="0"+minuto;
    }
    if(seg<10){
        seg="0"+seg;
    }

    document.getElementById("hora").textContent="Hora : "+hora+":"+minuto+":"+seg;
    setTimeout(reloj,1000);
}
document.body.setAttribute("onload","reloj();parpadeo();carrusel()");





function mostrar(parametroo){
    let textosSocios = document.querySelectorAll('.pblok');

    textosSocios.forEach(function(texto){
        texto.style.display = "none";


    });

    const textoPropuesto = document.querySelector(`article.blok:nth-child(${parametroo}) .pblok`);

    textoPropuesto.style.display = "block";

    setTimeout(function(){
        textoPropuesto.style.display = "none";}, 5000);

}





let imagewww=document.getElementsByClassName("rs");


function conBorde(e){
    e.style.border="1px solid green"
}
function sinBorde(e){
    e.style.border="none"
}

for(i=0;i<imagewww.length;i++){
    imagewww[i].setAttribute("onmouseover","conBorde(this)")
    imagewww[i].setAttribute("onmouseout","sinBorde(this)")
}










