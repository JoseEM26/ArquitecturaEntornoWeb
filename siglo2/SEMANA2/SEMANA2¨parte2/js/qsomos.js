// function mostrarInfoSocio(id){
//     const textosSocios = document.querySelectorAll('.texto-oculto');

//     textosSocios.forEach(function(texto){
//         texto.style.display = "none";
//     });

//     const textoSocioSeleccionado = document.querySelector(`article.socio:nth-child(${id}) .texto-oculto`);

//     textoSocioSeleccionado.style.display = "block";

//     setTimeout(function(){
//         textoSocioSeleccionado.style.display = "none";
//     }, 5000);

// }

// //MISIÓN VISIÓN VALORES
// function mostrarContenido(parametro){
//     const contenido = document.getElementById(`contenido-${parametro}`);
//     if(contenido.style.display === 'block') {
//         contenido.style.display = 'none';
//     } else {
//         contenido.style.display = 'block';
//     }
// }

// //CUENTA REGRESIVA
// function iniciarCuentaRegresiva(){
//     const segundosInput = document.getElementById("segundosInput");
//     const contador = document.getElementById("contador");

//     const segundos = parseInt(segundosInput.value);

//     if(isNaN(segundos) || segundos <= 0){
//         alert("Por favor, ingrese un valor válido en segundos.");
//         return;
//     }

//     let tiempoRestante = segundos;

//     let intervalo = setInterval(function(){
//         contador.textContent = tiempoRestante + " segundos";

//         if(tiempoRestante <= 0 ){
//             clearInterval(intervalo);
//             contador.textContent = "Redireccionando a catalogo.html";
//             setTimeout(function(){
//                 window.location.href = "catalogo.html";
//             }, 2000);
//         }
//         tiempoRestante--;
//     }, 1000)
// }


function mostrarInfoSocio(id){
  let infoOculto=document.querySelectorAll(".texto-oculto");

  infoOculto.forEach(function(texto){
    texto.style.display="none" } )

const seleccionarElemto=document.querySelector(`article.socio:nth-child(${id}) .texto-oculto`);

 seleccionarElemto.style.display="block";

 setTimeout(function(){
 seleccionarElemto.style.display="none";
    
 },5000);
}




function mostrarContenido(condicion){
  let textoOculto=document.getElementById(`contenido-${condicion}`);

  if(textoOculto.style.display==="block"){
    textoOculto.style.display="none"
  }else{
    textoOculto.style.display="block"
  }



}




function iniciarCuentaRegresiva(){
  let tiempoImputa=document.getElementById('segundosInput');
  let contador=document.getElementById("contador");
  
  let segundosRestante=parseInt(tiempoImputa.value);

if(isNaN(segundosRestante)||segundosRestante<=0 ){
  alert("ingresa un numero valido xd");
  return;
}
let intervalo =setInterval(function(){
  contador.textContent=segundosRestante+" segundos";
   if(segundosRestante<=0){
    clearInterval(intervalo);
    contador.textContent="redirigiendo a pagina principal";
    
    setTimeout(function(){
    window.location.href="catalogo.html"
    },2000
    )
   }
segundosRestante--;
},1000)
}

// //CUENTA REGRESIVA
// function iniciarCuentaRegresiva(){
//     const segundosInput = document.getElementById("segundosInput");
//     const contador = document.getElementById("contador");

//     const segundos = parseInt(segundosInput.value);

//     if(isNaN(segundos) || segundos <= 0){
//         alert("Por favor, ingrese un valor válido en segundos.");
//         return;
//     }

//     let tiempoRestante = segundos;

//     let intervalo = setInterval(function(){
//         contador.textContent = tiempoRestante + " segundos";

//         if(tiempoRestante <= 0 ){
//             clearInterval(intervalo);
//             contador.textContent = "Redireccionando a catalogo.html";
//             setTimeout(function(){
//                 window.location.href = "catalogo.html";
//             }, 2000);
//         }
//         tiempoRestante--;
//     }, 1000)
// }










