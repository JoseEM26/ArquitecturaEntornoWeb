function procesar(){
    let numero1=parseFloat(document.getElementById("txtNumero1").value);
    let numero2=parseFloat(document.getElementById("txtNumero2").value);
    operar(numero1,numero2);
}
function operar(x,y){
     let resultados=x+y;
     document.getElementById("txtS").value=
     'EL resultado entre '+x+' y '+ y +" es : "+resultados; 
}
document.getElementById('btnProcesar').setAttribute("onclick","procesar()");