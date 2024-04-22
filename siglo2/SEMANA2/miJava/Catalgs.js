// let cambio=0;


// function cambioMoneda(){
//     if(cambio==0){
//       enDolar();
//     }
//     else if(cambio==1){
//       enSoles(); }
// }



// function enDolar(tipo){
//     while(parseFloat(tipo) != tipo){
//         tipo=prompt('Ingresa el cambio del dolar:', '', '');
//     }
//    let soles=document.getElementById('precio').innerHTML;
//    let dolares=parseFloat(soles)/tipo;
//    document.getElementById('precio').innerHTML=dolares.toFixed(2);
//    document.getElementById('texto').innerHTML = "Precio US$";
//    document.getElementById('dolares').innerHTML = "S/";
//     cambio=1;
// }

// function enSoles(tipo){
//     while (parseFloat(tipo) != tipo) {
//         tipo = prompt ('Introduzca tipo de cambio: solo números', '', '');
//     }

//     let dolares = document.getElementById('precio').innerHTML;
//     let soles = parseFloat(dolares) * tipo;
//     document.getElementById('precio').innerHTML = soles.toFixed(2);
//     document.getElementById('texto').innerHTML = "Precio S/";
//     document.getElementById('dolares').innerHTML = "US$";
//     cambio = 0;
// }





let i=0;
function cambioMoneda(){
    if(i==0){
        enDolar();
    }
    else if(i==1){
         enSoles();
    }
}


function enDolar(){
   let cambio=prompt("Ingresa el tipo de cambio","","",);
   let soles=document.getElementById("precio");
   let dolar=parseFloat(soles)/cambio;

   document.getElementById("precio").innerHTML=dolar.toFixed(2);
   document.getElementById("texto").innerHTML="Precio $";
   document.getElementById("dolares").innerHTML="S/";
   i=1
}
function enSoles(){
    let cambio=prompt("Ingresa el tipo de cambio","","",);
    let dolar=document.getElementById("precio");
    let soles=parseFloat(dolar)*cambio;
 
    document.getElementById("precio").innerHTML=soles.toFixed(2);
    document.getElementById("texto").innerHTML="precio S/";
    document.getElementById("dolares").innerHTML="$";
    i=0
 }










 let e=0;
 function cambioImpuesto(){
     if(e==0){
        Con_impuesto();
     }
     else if(e==1){
        Sin_impuesto();
     }
 }
 

function Con_impuesto(){
    let sinImp=document.getElementById("precio").innerHTML;
    let conImp=sinImp*1.5;

    document.getElementById("precio").innerHTML=conImp.toFixed(2);
    document.getElementById("texto").innerHTML="ConINP";
    document.getElementById("igv").innerHTML="con_IGV";
    e=1
} 
function Sin_impuesto(){
    let conImp=document.getElementById("precio").innerHTML;
    let sinImp=conImp/1.5;

    document.getElementById("precio").innerHTML=sinImp.toFixed(2);
    document.getElementById("texto").innerHTML="SinI";
    document.getElementById("igv").innerHTML="sin_IGV";
    e=0
} 























