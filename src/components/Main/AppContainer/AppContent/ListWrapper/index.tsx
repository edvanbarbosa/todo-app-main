import { useState } from 'react';
import Itask from '../../../../../pages/types/Itask';
import List from '../List';
import TodoInfo from '../TodoInfo';
import style from './ListWrapper.module.scss';

interface IProps{
    tasks: Itask[];
    setTaskList: React.Dispatch<React.SetStateAction<Itask[]>>;
}


export default function ListWrapper({tasks,setTaskList}: IProps){
    const [finished, setFinished] = useState<Itask>(); 
    const [filter, setFilter] = useState<'all'|'active'|'completed'>('all'); //all, active, completed
    const finishOrResetTask = (taskCompleted: Itask, action:boolean) => { //taskCompleted é a task que foi completada, action é o valor que ela vai receber
        setFinished(taskCompleted);
        setTaskList((oldTasks) => oldTasks?.map((task)=>({
          ...task,
          completed: task.id === taskCompleted.id? action : task.completed,
          
        })) )
      };
    

      const deleteTask = (taskToDelete: Itask) => {
        setTaskList((oldTasks) => oldTasks?.filter((task) => task.id !== taskToDelete.id));
      }
      
  return (
    <div className={`${style.ListWrapper}`}>
    <List filter={filter} listForRender={tasks} finishTask={finishOrResetTask} deleteTask={deleteTask} />
    <TodoInfo setTaskList={setTaskList} setFilter={setFilter} listOfTasks={tasks} />
  </div>
  );
}