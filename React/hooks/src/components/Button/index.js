import { useContext } from "react"
import GlobalContext from '../globals/context'

export default ({className}) => {

    const { iniciado, setIniciado } = useContext(GlobalContext)

    const inicioPausa = ()=> {
        
    }
    
    return (
        <button className={className} onClick={() => setIniciado(prev => !prev)}>{ iniciado ? "Pausar" : "Iniciar"}</button>
    )
}