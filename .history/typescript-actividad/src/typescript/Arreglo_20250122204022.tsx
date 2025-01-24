export const Arreglo = () => {
    const arreglo = [1, 2, 3, 4, 5]; 
    const suma = arreglo.reduce((acumulado, valor) => acumulado + valor, 0);

    return (
        <div>
            <h1>2. Crear una función con parámetros que permita calcular la suma de los elementos de un arreglo.</h1>
            <br />
            <h3>Suma de los elementos del arreglo: {suma}</h3>
        </div>
    );
}
