//parte 1

const jedi = {nombre: "Luke Skywalker", edad: 19};


jedi.edad = 25;

console.log(jedi); 

//parte2

let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

//parte 3

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const precioTotal = sable1.precio + sable2.precio;
console.log("El precio total de los sables de luz es: " + precioTotal + " créditos.");

//parte 4

let precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 0};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 0};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("El precio final de " + nave1.nombre + " es: " + nave1.precioFinal + " créditos.");
console.log("El precio final de " + nave2.nombre + " es: " + nave2.precioFinal + " créditos.");

