import List from "./List";
import TodoInfo from "./TodoInfo";
import style from "./AppContent.module.scss";
import Itask from "../../../../pages/types/Itask";
import { useState } from "react";

export default function AppContent() {
    let disfragmentTask: string = "";  //Montar a task antes de adicionar 

  const [tasks = [], setTaskList] = useState<Itask[]>(); 


  const addTask = (task: Itask) => { //Adicionar task
    setTaskList([...tasks, task]);
  };


  return (
    <div className={style.AppContent}>
      <form onSubmit={(event)=>{
        event.preventDefault();
        addTask({task: disfragmentTask, completed: false});
        let eventTarget = event.target as HTMLFormElement;
        eventTarget.reset();
      }}>
        <input
          className={style.IptCreateTodo}
          type="text"
          placeholder="Create a new todo..."
          onChange={(event) => {
            disfragmentTask = event.target.value;
          }}
        />
      </form>

      <div className={`${style.ListWrapper}`}>
        <List tasks={tasks} />
        <TodoInfo  listOfTasks={tasks} />
      </div>
    </div>
  );
}
