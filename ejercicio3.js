// 3.1 Multiplicación

console.log(10 * 5); 


// 3.2 División

console.log(10 / 2); 

// 3.3 Resto

console.log(15 % 9); 

// 3.4 Operador de asignación para obtener 15

let p = 10, j = 5;
let o = p + j; 
console.log(o);

// 3.5 Operador de asignación para obtener 50

let c = 10, m = 5;
let i = c * m; // 3.5 Operador de asignación para obtener 50
console.log(i);


// Ejercicios 4.1 - 4.6
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]); // 4.1 - Saca a "Tendo" por consola

aldeanos.push("Cervasio"); // 4.2 - Agrega "Cervasio" al final

aldeanos[0] = "Bambina"; // 4.3 - Cambia el primer elemento por "Bambina"

aldeanos.reverse(); // 4.4 - Da la vuelta al array

let indiceNarciso = aldeanos.indexOf("Narciso"); // Encuentra el índice de "Narciso"
if (indiceNarciso !== -1) {
    aldeanos[indiceNarciso] = "Canela"; // 4.5 - Cambia "Narciso" por "Canela"
}

console.log(aldeanos[aldeanos.length - 1]); // 4.6 - Imprime el último elemento dinámicamente
