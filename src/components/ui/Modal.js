import classes from "./Modal.module.css"
import FavoritesContext from "../../store/favorites-context"
import { useContext } from "react"



function Modal(props){

    const myCtx = useContext(FavoritesContext)
    
    // function escapeHandlerCheck(){
    // if (myCtx.allPeople.some(person=>props.personId == person.id) || myCtx.favorites.some(person=>props.personId == person.id)){
    //     myCtx.finalModalState(false)
    //     console.log('Nope, im in the loop where modal false')
    // }
    // else{ 
    //     myCtx.finalModalState(true)}
    //     console.log('You should see modal')
    // }

    let myText
    let Yes
    let No
    let btn

    if (myCtx.allPeople.some(person=>props.personId == person.id)){
        myText = "Объект засветился по телефонному звонку, группа выезжает на темном бусике к месту звонка и там вы видите подозреваемого, в голове похвала от начальника и премия,\n\
        но в то же время не хотелось бы портить жизнь человеку, что делаешь?"
        Yes = "Хвать!"
        No = "Оставить пацана" 
        btn = <button className={classes.btn} onClick={()=>{props.cancelClose(); props.confirm()}}>{Yes}</button>
  
    }

    else{
        myText = "После нападков со стороны подкупленных зеков ты решаешь что жить так дальше невозможно и даешь отпор,\n\
        к тебе присоединяются твои сторонники по камере и начинается бунт, в какой-то момент из-за нар вылазит петух с финкой и медленно движется к тебе, что делаешь?"

        Yes = "Драться"
        No = "Покаяться" 
        btn = <button className={classes.btn} onClick={()=>{props.cancelClose(); props.confirm() ; myCtx.finalModalState(true)}}>{Yes}</button>
    }

    return <div className={classes.modal}>
        <p>{myText}</p>
        <button className= {classes.btnalt} onClick={props.cancelClose}>{No}</button>
        {btn}
    </div>
    
}
export default Modal