export const ArreglosDivision = () => {
    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const arregloDividido = arreglo.map((valor) => valor / 5);

    return (
        <div>
            <h1>3. Devolver un nuevo arreglo con los valores divididos para 5.</h1>
            <br />
            <h3>Arreglo original: {JSON.stringify(arreglo)}</h3>
            <h3>Nuevo arreglo dividido por 5: {JSON.stringify(arregloDividido)}</h3>
        </div>
    );
}
