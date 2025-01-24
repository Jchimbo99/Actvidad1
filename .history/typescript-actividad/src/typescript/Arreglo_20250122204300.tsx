export const SumaArreglo = () => {

    const numeros = [10, 20, 30, 40, 50];  
    
    const calcularSuma = (numeros: number[]): number => {  // Nueva función con otro nombre
        return numeros.reduce((total, numero) => total + numero, 0);
    }

    const totalSuma = calcularSuma(numeros);  // Variable con nuevo nombre

    return (
        <div>
            <h1>2. Crear una función con parámetros que permita calcular la suma de los elementos de un arreglo.</h1>
            <br />
            <h3>Numeros en el arreglo: {JSON.stringify(numeros)}</h3>
            <p>La suma de los elementos del arreglo es: {totalSuma}</p>
        </div>
    );
}
