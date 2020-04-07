// alert('Perrros')

let jugador1 = prompt('Jugador 1: Ingresa tu jugada').toLowerCase;
let jugador2 = prompt('Jugador 2: Ingresa tu jugada').toLowerCase;

let opc1 = 'piedra'.toLowerCase;
let opc2 = 'tijera'.toLowerCase;
let opc3 = 'papel'.toLowerCase;

if (jugador1 === opc1 && jugador2 ===opc2 ||  jugador1 === opc2 && jugador2 ===opc3 || jugador1 === opc3 && jugador2 === opc1) {
    console.log('Gana Jugador 1')
}else if (jugador2 === opc1 && jugador1 ===opc2 ||  jugador2 === opc2 && jugador1 ===opc3 || jugador2 === opc3 && jugador1 === opc1){
    console.log('Gana Jugador 2')
}else if(jugador1 === opc1 && jugador2 ===opc1 ||  jugador1 === opc2 && jugador2 ===opc2 || jugador1 === opc3 && jugador2 === opc3){
    console.log('Es un empate')
}else{
    console.error('Datos no válidos')
};



