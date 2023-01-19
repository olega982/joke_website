import { useContext } from "react"
import FavoritesContext from "../../store/favorites-context"
import classes from "./Modal.module.css"

const finalText = "Ты выбиваешь финку из рук и даешь по щам противнику, он выключается. В какой-то момент ты замечаешь что окно разбито и на заборе нет охораны,\n\
 ловким движением перелазишь через забор и вот она воля."

function FinalModal(){
    const myCtx = useContext(FavoritesContext)

    return <div className={classes.modal}>
        <p>{finalText}</p>
        <button className= {classes.btnalt} onClick={myCtx.finalModalState(false)}>Фуф, наконец-то.</button>
    </div>
}
export default FinalModal