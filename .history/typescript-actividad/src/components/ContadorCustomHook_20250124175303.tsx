import { useCounter } from "../hooks/useCounter";

export const ContadorCustomHook = () => {
    
    //lamar custohok

    const {valor, contador}=useCounter(0);


return (
    <div>
    <h3>5Contador Custom Hook: <small>{valor}</small>
    </h3>
    <button
        className="btn btn-primary"
        onClick={() => contador(5)}>+5
    </button>
    &nbsp;

    <button
        className="btn btn-primary"
        onClick={() => contador(-5)}>-5
    </button>
    &nbsp;
    </div>
);
};
