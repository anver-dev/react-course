/**
 *  Import, export y funciones comunes de arreglos
 */

import { heroes } from "../data/heroes";

// console.log(heroes);

// Find: encuentra un elemento
export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(1));

// Filter: filtra todo el arreglo
export const getHeroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

// console.log(getHeroesByOwner("DC"));
