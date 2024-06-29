import Itask from "../../../../../../pages/types/Itask";
import Cross from "../../../../../../assets/images/icon-cross.svg";
import style from "./Task.module.scss";

interface IProps extends Itask{
  finishTask: (taskCompleted: Itask, action:boolean) => void;
  deleteTask: (taskToDelete: Itask) => void;
}

export default function Task({ task, completed,id,finishTask,deleteTask}: IProps) {
 
  return (
    <li draggable="true" className={`${style.task} ${completed?style.taskCompleted:""}`}>
      <label className={`${style.checkTask}`}>
        <input
          type="checkbox"
          onChange={()=>{
            finishTask({task: task, completed,id}, !completed) //Passando a task que foi completada e o valor que ela vai receber, se ela foi completada ou não
          }}
        />
        <div className={`${style.checkmark}`}></div>
      </label>

      <p>{`${task}`}</p>
      <span className={`${style.delete}`} onClick={()=>deleteTask({task,id,completed})}>
        <img src={Cross} alt="delete" />
      </span>
    </li>
  );
}
