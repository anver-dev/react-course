


const nombre   = 'Karina';
const apellido = 'Guzmán';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre = 'Juan') {
    return 'Hola ' + nombre;
}
