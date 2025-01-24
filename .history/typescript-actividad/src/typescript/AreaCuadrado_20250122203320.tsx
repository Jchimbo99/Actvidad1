export const AreaCuadrado = () => {
    const lado = 6; 
    const area = lado * lado;

    return (
        <div>
            <h3>Área del Cuadrado</h3>
            <p>El área del cuadrado es: {area}</p>
        </div>
    );
}
