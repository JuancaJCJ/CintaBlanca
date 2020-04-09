//alert('ALERTAA')

//Menu
let titulo = document.getElementById('titulo');
let nombre = document.getElementById('nombre');
let telefono = document.getElementById('telefono');
let pizza = document.getElementById('pizza');
let opciones = document.getElementById("opciones");
let direccion = document.getElementById('direccion');
let button = document.getElementById('pedir');

//Recibo

let nombre2 = document.getElementById('nombre2');
let pizza2 = document.getElementById('pizza2');
let direccion2 = document.getElementById('direccion2');
let telefono2 = document.getElementById('telefono2');

let card3 = document.getElementById('card3');

let hawaiana2 =document.getElementById('hawaiana2');
let pepperoni2 =document.getElementById('pepperoni2');
let quesos2 =document.getElementById('quesos2');




const cambiar = () => {

    card3.classList.remove('card3');

    titulo.innerHTML = '¡Tu orden está en proceso :D!';

    nombre2.innerHTML = nombre.value;
    pizza2.innerHTML = answerpizza.value;
    direccion2.innerHTML = direccion.value;
    telefono2.innerHTML = telefono.value;
    
    if(answerpizza === 'Hawaiana'){
        hawaiana2.classList.remove('hawaiana3');
        pepperoni2.classList.add('pepperoni3');
        quesos2.classList.add('quesos3');
    }else if(answerpizza === 'Pepperoni'){
        hawaiana2.classList.add('hawaiana3');
        pepperoni2.classList.remove('pepperoni3');
        quesos2.classList.add('quesos3');
    }else if(answerpizza === '4 Quesos'){
        hawaiana2.classList.add('hawaiana3');
        pepperoni2.classList.add('pepperoni3');
        quesos2.classList.remove('quesos3');
    }
    
};

button.addEventListener('click', cambiar);
