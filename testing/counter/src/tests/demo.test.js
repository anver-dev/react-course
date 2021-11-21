test('Las cadenas deben ser iguales', () => {
    // 1. Inicialización
    const mensaje = 'Hola Mundo!';

    // 2. Estímluo
    const mensajeDeComparacion = `Hola Mundo!`;

    // 3. Observar el comportamiento 
    expect(mensaje === mensajeDeComparacion).toBe(true);
})
