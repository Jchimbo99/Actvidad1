import React from 'react';

export const AreaCuadrado = () => {
    const lado = 6; // Puedes cambiar este número manualmente
    const calcularAreaCuadrado = (lado: number): number => {
        return lado * lado;
    }

    const area = calcularAreaCuadrado(lado);

    return (
        <div>
            <h3>Área del Cuadrado</h3>
            <p>El lado del cuadrado es: {lado}</p>
            <p>El área del cuadrado es: {area}</p>
        </div>
    );
}
