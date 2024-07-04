import { useState } from "react";
import style from "./Form.module.scss";
import {v4 as uuidv4} from 'uuid';
import Itask from "../../../../../pages/types/Itask";

interface IProps{
  setTaskList: (tasks: () => Itask[]) => void;
  theme: "light" | "dark";
}

export default function Form({setTaskList, theme}: IProps){
  const [task, setTask] = useState<string>(""); // [valor, função de atualização]

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(task === ""){
      return;
    }
    setTaskList((oldTasks = [])=>[...oldTasks, {
      task: task, 
      completed: false,
      id: uuidv4()
    
    }]);
    setTask("");
  }
    return(
        <form className={`${style.form} ${theme==='light'?style.formLight:style.formDark}`} onSubmit={(event)=>{
            addTask(event);
          }}>
    
            <input
              className={style.IptCreateTodo}
              required
              type="text"
              placeholder="Create a new todo..."
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
              }}
            />
    
          </form>
    
    )
}