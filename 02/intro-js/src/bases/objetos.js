/**
 * Objetos literales - diccionarios. {}
 * Son pares de valores.
 *  */

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  // la coma final puede ser considerada buena practica.
  edad: 45,
  // Los objetos se pueden anidar
  direccion: {
    ciudad: "New York",
    zip: 456789,
    lat: 15.21532,
    lng: 21.05228,
  },
};

console.log({ persona });

// Para hacer copias de objetos
const personaDos = { ...persona };

console.log(personaDos);
