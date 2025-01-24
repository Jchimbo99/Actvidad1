import { ContadorCustomHook } from "./components/ContadorCustomHook";
import { AreaCuadrado } from "./typescript/AreaCuadrado";
import { SumaArreglo } from "./typescript/Arreglo";
import { ArreglosDivision } from "./typescript/ArreglosDivision";
import { PromedioCalificaciones } from "./typescript/PromedioCalificaciones";

export const App = () => {
  return (

    <div className="mt-2">
      <h1>Actividad Contacto Docente</h1>
      <hr />
      <br />
      <h2>Ejercicios</h2>
      <br />
      
      <AreaCuadrado/>
      
      <SumaArreglo/>
      <ArreglosDivision/>
      <PromedioCalificaciones/>
      <ContadorCustomHook/>
      </div>
  )
}


export default App;
