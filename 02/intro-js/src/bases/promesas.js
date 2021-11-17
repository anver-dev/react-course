/**
 * Promesas
 */

import { getHeroeById, getHeroesByOwner } from "./bases/imports-exports";

// por naturaleza son asíncronas
/* const promesa = new Promise(
  // se crean con un callback
  (resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(2);
      // resolve(heroe);
      reject("No hubo hero");
    }, 2000);
  }
); */

/**
 * then: indica que la promesa su cumplió satisfactoriamente
 * catch: para cuando la promesa resulta en error
 * finally: pase lo que pase se ejecuta
 * */

/* promesa
  .then((heroe) => {
    console.log("heroe: ", heroe);
  })
  .catch((err) => console.warn(err))
  .finally(() => {
    console.log("finally");
  }); */

const getHeroeByIdAsync = (id) => {
  const promesa = new Promise(
    // se crean con un callback
    (resolve, reject) => {
      setTimeout(() => {
        const heroe = getHeroeById(id);
        if (heroe) resolve(heroe);
        else reject("No se encontro el heroe");
      }, 2000);
    }
  );
  return promesa;
};

getHeroeByIdAsync(4)
  //.then((heroe) => console.log("El heroe es: ", heroe))
  .then((console.log))
  // .catch((err) => console.warn(err))
  .catch(console.warn) // se puede no pasar el argumento explicitamente
  .finally(() => console.log("Fin de la promesa"));
