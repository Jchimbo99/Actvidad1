interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
}

export const PromedioCalificaciones = () => {
    const alumnos: Alumno[] = [
        {
            name: "Jorge",
            edad: 22,
            calificacion: 7,
        },
        {
            name: "Jose",
            edad: 21,
            calificacion: 9,
        },
        {
            name: "Veronica",
            edad: 23,
            calificacion: 8,
        },
        {
            name: "Milena",
            edad: 20,
            calificacion: 10,
        },
        {
            name: "Viviana",
            edad: 19,
            calificacion: 10,
        },
        {
            name: "Wendy",
            edad: 20,
            calificacion: 8,
        },
        {
            name: "Gerson",
            edad: 18,
            calificacion: 9,
        },
    ];


    const calcularPromedio = (alumnos: Alumno[]): number => {
        const sumaCalificaciones = alumnos.reduce((total, alumno) => total + alumno.calificacion, 0);
        return sumaCalificaciones / alumnos.length;
    };

    const promedio = calcularPromedio(alumnos);

    return (
        <div>
            <h1>4. Calcular el promedio de las calificaciones de los alumnos.</h1>
            <br />
            <h3>Alumnos y sus calificaciones:</h3>
            <ul>
                {alumnos.map((alumno, index) => (
                    <li key={index}>
                        {alumno.name}: {alumno.calificacion}
                    </li>
                ))}
            </ul>
            <h3>Promedio de calificaciones: {promedio}</h3>
        </div>
    );
}
