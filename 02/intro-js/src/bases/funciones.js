/**
 * Funciones
 */

// Funcion lambda - arrow function
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("anver-dev");
console.log(usuarioActivo);
