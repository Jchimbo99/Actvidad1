import { useState } from "react";

export const useCounter = (inicial: number = 0) => {


    const [valor, setValor] = useState<number>(inicial);


    const contador = (numero: number): void => {
        setValor(valor + numero);
    }
return{
    valor,
    contador
}

}
