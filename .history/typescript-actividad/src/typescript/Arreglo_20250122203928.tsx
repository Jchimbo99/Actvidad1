import React from 'react';

export const Arreglo = () => {
    // Definir el arreglo
    const arreglo = [1, 2, 3, 4, 5]; // Puedes cambiar estos números

    // Función para sumar los elementos del arreglo
    const sumarElementosArreglo = (arreglo: number[]): number => {
        return arreglo.reduce((acumulado, valorActual) => acumulado + valorActual, 0);
    }

    // Calcular la suma
    const suma = sumarElementosArreglo(arreglo);

    return (
        <div>
            <h1>2. Crear una función con parámetros que permita calcular la suma de los elementos de un arreglo.</h1>
            <br />
            <h3>Arreglo: {JSON.stringify(arreglo)}</h3>
            <p>La suma de los elementos del arreglo es: {suma}</p>
        </div>
    );
}
