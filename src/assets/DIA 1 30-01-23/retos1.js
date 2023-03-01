//Reto 1.

const colors = require('colors'); // cómo utilizar módulo. Palabra reservada de node.js

let cadena = "Esto es una cadena"; 

let numero = 25 ;

let booleana = true ;

console.log(cadena.red);
console.log(colors.green(numero));
console.log(colors.yellow(booleana)); 

//Reto 2. Raíz cuadrada de 1369 y mostrar en amarillo.

console.log(colors.yellow(Math.sqrt(1369)));

//Reto 3. Número aleatorio entre 0 y 10 y mostrar en azul.

console.log(colors.blue(Math.random()*10));

//Reto 4. 

let nombre = "Celia";

let apellido1 = "Sánchez";

let apellido2 = "Martín";

let presentacion = "Hola me llamo " + nombre + 
     " mi primer apellido es " + apellido1 + 
     " y mi segundo apellido es " + apellido2 + "." ;

let presentacion2 = `Hola me llamo ${nombre} ${apellido1}
     ${apellido2}.`;

presentacion.toUpperCase;
presentacion2.toUpperCase;

console.log(presentacion.magenta);
console.log(presentacion2.cyan);

//Reto 5. 

let string = "Be water my friend";

console.log(string.cyan);

let tamaño = string.length;

console.log(colors.green(tamaño));

console.log(string[2].red);

console.log(colors.white(string.includes("codenotch")));



