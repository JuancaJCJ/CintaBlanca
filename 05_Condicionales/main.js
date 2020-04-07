// alert ('Descarga esto')

//Clase pasada vimos var y suma, resta, multiplicación y división

//Hoy son condicionales!

// if(condicion){
//     Bloque codigo si se cumple
// }else { 
//    bloque codigo si no se cumple 
// }

// let num1 = 10;
// let num2 ='500';
// console.log(typeof(num2));
// //= --> asigna un valor
// // == --> compara valores
// // === --> compara el tipo de datos (si es texto o número)

// if(num1 === '10' ){
//     //if siempre trabaja con true
//     console.log('Es verdad');
// } else{
//     //else siempre trabaja con false
//     console.log('No es verdad');
// }

// let num3 = 5;
// let num4 = 10;

//% --> modulo

// if(num3 %2 === 0){
//     console.log(num3 + ' ' + ':Es par')
// }else{
// console.log(num3 + ' ' + ':no es par')
// }

//Para ingresar otra condición se utilizan operadores lógicos
    //and && --> Agregar otra condición
    //or || --> 


//Pase para conducir

let preguntaedad = prompt('Ingresa tu edad')
//todo valor por defecto en prompt es tipo string, 
// console.log(typeof(preguntaedad));

let edad = Number(preguntaedad);
// console.log(typeof(edad));

if (edad >= 18 && edad <=70){
    console.log('Puedes conducir');

    
}else if (edad === 16 || edad === 17){
    //Para agregar otra condición: else if
    console.log('Puedes sacar el permiso')
}else if(edad <16 || edad>70){
    console.log('No puedes conducir')
}else{
    console.error('Datos incorrectos')
}
