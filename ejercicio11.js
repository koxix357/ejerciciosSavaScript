function averageWord(list) {
    let sum = 0;
  
    for (let i = 0; i < list.length; i++) {
      if (typeof list[i] === 'number') {
        sum += list[i]; // Si el elemento es un número, lo sumamos
      } else if (typeof list[i] === 'string') {
        sum += list[i].length; // Si el elemento es un string, sumamos su longitud
      }
    }
  
    return sum / list.length; // Devolvemos el promedio, dividiendo por la cantidad de elementos
  }
  
  const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
  console.log(averageWord(mixedElements)); // Resultado
  