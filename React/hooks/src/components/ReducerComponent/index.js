import { useReducer } from "react";
import Reducer from "../globals/reducer";

export default () => {

    const [contador, dispatch] = useReducer(Reducer, 0)

    console.log(contador)


    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => dispatch("incrementar")} > + </button>
            <button onClick={() => dispatch("decrementar")}> - </button>
        </div>
    )
}