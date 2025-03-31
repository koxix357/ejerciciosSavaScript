// 4.1 - Saca a "Tendo" por consola

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]); 

// 4.2 - Agrega "Cervasio" al final

aldeanos.push("Cervasio"); 

// 4.3 - Cambia el primer elemento por "Bambina"

aldeanos[0] = "Bambina"; 

// 4.4 - Da la vuelta al array

aldeanos.reverse(); 

// 4.5 - Cambia "Narciso" por "Canela"

let indiceNarciso = aldeanos.indexOf("Narciso"); // Encuentra el índice de "Narciso"
if (indiceNarciso !== -1) {
    aldeanos[indiceNarciso] = "Canela"; 
}

// 4.6 - Imprime el último elemento dinámicamente

console.log(aldeanos[aldeanos.length - 1]); // 
