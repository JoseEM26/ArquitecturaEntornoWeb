/*Uso de condicionales*/
let edad = prompt("Ingresa tu edad: ");
function mayorEdad(){
    if(edad<18){
        alert("Llama a tus padres para poder continuar con la compra");
        document.write("<h1 style='color:red;'>DIJE QUE LLAMARAS A TUS PADRES!!!</h1>");
    }
    else{
        alert("Bienvenido, disfruta tu compra");
    }
}