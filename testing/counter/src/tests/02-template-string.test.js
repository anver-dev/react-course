import "@testing-library/jest-dom";
import { getSaludo } from "../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test("getSaludo debe retornar Hola Karina", () => {
    const nombre = "Karina";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("getSaludo debe retornar Hola Juan si no hay argumento", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Juan");
  });
});
