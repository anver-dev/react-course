/**
 * Arreglos en JS
 */

const arreglo = [1, 2, 3, 4];
// push modifica el arreglo principal
/**  
 arreglo.push(1)
 arreglo.push(2)
 arreglo.push(3)
 arreglo.push(4)
 */

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

// Creando un nuevo arreglo 
let arreglo3 = arreglo2.map((numero) => {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
