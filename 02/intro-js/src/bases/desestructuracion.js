/**
 * Desestructuración
 */

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  // la coma final puede ser considerada buena practica.
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad } = persona;

console.log(nombre);
console.log(edad);

const retornaPersona = ({ clave, nombre, edad, rango = "Capitan" }) => ({
  nombreClave: clave,
  anios: edad,
});

const { nombreClave, anios } = retornaPersona(persona);
