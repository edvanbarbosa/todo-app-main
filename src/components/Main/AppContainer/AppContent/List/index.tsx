import Itask from "../../../../../pages/types/Itask";
import Task from "./Task";
import style from "./List.module.scss";
import { Key} from "react";

interface propsType{
  finishTask: (taskCompleted: Itask, action:boolean) => void;
  listForRender: Itask[];
  deleteTask: (taskToDelete: Itask) => void;
  filter: 'all'|'active'|'completed';
}

function filterInList(listForRender: Itask[], filter: 'all'|'active'|'completed'){ //Função para filtrar as tasks
  switch(filter){
    case 'all':
      return listForRender;
    case 'active':
      return listForRender.filter((task) => !task.completed);
    case 'completed':
      return listForRender.filter((task) => task.completed);
    default:
      return listForRender;
  }
}

export default function List({listForRender,finishTask,deleteTask, filter}: propsType) {
 

  return (
    <ul className={`${style.listOfTasks}`}>

      {filterInList(listForRender, filter).map((task: Itask, index: Key) => (
        <Task key={index} finishTask={finishTask} deleteTask={deleteTask} {...task} />
      ))}
    </ul>
  );
}
