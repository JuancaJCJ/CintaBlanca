
// let saludo = 'Hola';

// consoles.log(saludo);
// saludo = 10 
// console.log(saludo);


// Ejemplo:
// Function suma(){
//     console.log(5+5)
// };
// suma();

// function suma(a, b) {
//     console.log(a + b);
// };

//     //a, b   
// suma(10, 20);
// suma(100, 150);

// //Arect Function
// const resta = (c, d) => {
//     console.log(c - d);
// };

//       //c, d
// resta(100, 50)


//Ejercicio: el área de un cuadrado = lado*lado

const areac = (a, b) => {
    console.log(a*b);
};

const areat = (c, d) => {
    console.log(c * d /2);
};
areac (10, 5);
areat (10, 15)


for(let i = 0; i<=100; i++){
    if (i % 3 && i % 5){
        console.log(i + ' FizzBuzz');
    }
    else if(i % 5){
        console.log(i + ' Buzz');
    }
    else if(i % 3){
        console.log(i + ' Fizz');
    }
    else{
        console.log(i)
    }
}
