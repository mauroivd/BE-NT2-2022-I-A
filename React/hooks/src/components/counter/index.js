import { useContext, useEffect, useState } from "react"
import GlobalContext from '../globals/context'
let idInterval

const Contador = () => {
    const [counter, setCounter] = useState(0)
    const { iniciado } =  useContext(GlobalContext)

    // Con TIMEOUT
    // TODO: Investigar la forma de hacer andar esto sin el delay
    // useEffect(() => {                
    //         setTimeout(() => {                
    //                 setCounter(prev => iniciado ? prev + 1 : prev)
    //         }, 1000)
    // },[counter, iniciado])
    


    // Con INTERVAL
    // FUNCIONA sin delay
    useEffect(() => {
        // console.log("ID interval es ", idInterval)
        if (iniciado){
            idInterval = setInterval(()=>{
                setCounter(prev => prev + 1)
            }, 1000)
        }else{
            clearInterval(idInterval)
        }

        
    }, [iniciado])

    useEffect(() => {
        console.log("Se deberia ejecutar una sola vez cuando se monta el componente ")
    }, [])





    return <span>{counter}</span>

}

export default Contador