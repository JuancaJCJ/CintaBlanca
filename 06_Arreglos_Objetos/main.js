
//Nuevas variables
    //Arreglos

//let arreglo = [];
            //   0           1            2           3
let flores = ['Rosas', 'Margaritas', 'Tulipanes', 'GiraSol'];

console.log(flores);

//Para acceder a un elemnto de un arreglo
console.log(flores[2]);

//Acá hay que especificar la posición en la va el nuevo elemento
flores[4] = 'Orquidea';

console.log(flores);

console.log(flores[2]);

//.push suma un elemento hasta el final
flores.push('RosasRojas');

console.log(flores);

//.pop borra el último elemento
flores.push('True')

flores.pop();

console.log(flores)

//.splice() se especifican dos número: el primero, decide desde que posición empieza a borrar; y el segundo número: hasta qué posición se va a borrar

flores.splice(0, 2)

console.log(flores)


//Objetos 

let persona = {
    nombre : 'Juan',
    edad: '21',
    tel : '310795410',
    direccion : 'Bog',
    familia : true,
    musica : ['Salsa', 'Reggeton', 'Metal'],
    peliculas: {
        terror : false,
        romanticas : ['Titanic', 'Romeo y Julieta']
    }
}

console.log(persona)

//Para acceder a un punto específico
console.log(persona.musica[2])
console.log(persona.peliculas.romanticas[1])