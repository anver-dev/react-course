/**
 * Desestructuracion de arreglos
 */
const personajes = ["Goku", "Vegeta", "Trunks"];

const [, p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const usarEstado = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

// llamamos al valor y a la funcion dandole un nombre. 
const [nombre, setNombre] = usarEstado('Goku');

console.log(nombre)

setNombre();