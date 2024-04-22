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

//Función con PARÁMETROS
function enDolar(tipo){
    while (parseFloat(tipo) != tipo) {
        tipo = prompt('Introduzca tipo de cambio: solo números', '', '');
    }

    let soles = document.getElementById('precio').innerHTML;
    let dolares = parseFloat(soles) / tipo;
    document.getElementById('precio').innerHTML = dolares.toFixed(2);
    document.getElementById('texto').innerHTML = "Precio US$";
    document.getElementById('dolares').innerHTML = "S/";
    cambio = 1;

}

function enSoles(tipo){
        while (parseFloat(tipo) != tipo) {
            tipo = prompt ('Introduzca tipo de cambio: solo números', '', '');
        }

        let dolares = document.getElementById('precio').innerHTML;
        let soles = parseFloat(dolares) * tipo;
        document.getElementById('precio').innerHTML = soles.toFixed(2);
        document.getElementById('texto').innerHTML = "Precio S/";
        document.getElementById('dolares').innerHTML = "US$";
        cambio = 0;
}


//FUNCIÓN SIMPLE
function conImpuestos() {
    let precioSin = document.getElementById('precio').innerHTML;
    let precioCon = parseFloat(precioSin) * 1.18;
    document.getElementById('precio').innerHTML = precioCon.toFixed(2);
    document.getElementById('texto').innerHTML = 'Precio inc. IGV: ';
    document.getElementById('igv').innerHTML = 'Sin IGV';
    impuesto = 1;
}

function sinImpuestos() {
    let precioSin = document.getElementById('precio').innerHTML;
    let precioCon = parseFloat(precioSin) / 1.18;
    document.getElementById('precio').innerHTML = precioCon.toFixed(2);
    document.getElementById('texto').innerHTML = 'Precio sin. IGV: ';
    document.getElementById('igv').innerHTML = 'Con IGV';
    impuesto = 0;
}