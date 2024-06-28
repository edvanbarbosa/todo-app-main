import Itask from '../../../../../pages/types/Itask'
import style from './TodoInfo.module.scss'

export default function TodoInfo({listOfTasks}: {listOfTasks: Itask[]}){
    return(
        <div className={`${style.todoInfo}`}>
            <p className="itens-left">{
                listOfTasks.filter((task) => !task.completed).length //Filtrar as tasks que não estão completas
            } Itens Left</p>

            <ul className={`${style.filter}`}> 
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>

            <button>Clear Complete</button>
        </div>
    )
}