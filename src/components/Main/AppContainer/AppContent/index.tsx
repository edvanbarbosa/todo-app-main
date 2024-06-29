import List from "./List";
import TodoInfo from "./TodoInfo";
import style from "./AppContent.module.scss";
import Itask from "../../../../pages/types/Itask";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

export default function AppContent() {
 
  const [task, setTask] = useState<string>(""); // [valor, função de atualização]
  const [tasks=[], setTaskList] = useState<Itask[]>(); 
  const [finished, setFinished] = useState<Itask>();


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
    console.log(tasks)
  }

  const FinishOrResetTask = (taskCompleted: Itask, action:boolean) => { //taskCompleted é a task que foi completada, action é o valor que ela vai receber
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
    <div className={style.AppContent}>
      <form onSubmit={(event)=>{
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

      <div className={`${style.ListWrapper}`}>
        <List tasks={tasks} finishTask={FinishOrResetTask} deleteTask={deleteTask}/>
        <TodoInfo  listOfTasks={tasks} />
      </div>
    </div>
  );
}
