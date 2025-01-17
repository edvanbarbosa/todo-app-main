import { useState } from "react";
import Itask from "../../../../../pages/types/Itask";
import List from "../List";
import TodoInfo from "../TodoInfo";
import style from "./ListWrapper.module.scss";

interface IProps {
  tasks: Itask[];
  setTaskList: React.Dispatch<React.SetStateAction<Itask[]>>;
  theme: "light" | "dark";
}

export default function ListWrapper({ tasks, setTaskList, theme }: IProps) {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all"); //all, active, completed

  const finishOrResetTask = (taskCompleted: Itask, action: boolean) => {
    //taskCompleted é a task que foi completada, action é o valor que ela vai receber
    setTaskList((oldTasks = []) =>
      oldTasks?.map((task: Itask) => ({
        ...task,
        completed: task.id === taskCompleted.id ? action : task.completed,
      }))
    );
  }

  const deleteTask = (taskToDelete: Itask) => {
    setTaskList((oldTasks = []) =>
      oldTasks?.filter((task: { id: string; }) => task.id !== taskToDelete.id)
    );
  };

  return (
    <div className={`${style.ListWrapper} ${theme==='light'?style.ListWrapperLight:style.ListWrapperDark}`}>
      <List
        setListForRender={setTaskList}
        filter={filter}
        listForRender={tasks}
        finishTask={finishOrResetTask}
        deleteTask={deleteTask}
        theme={theme}
      />
      <TodoInfo
        setTaskList={setTaskList}
        setFilter={setFilter}
        listOfTasks={tasks}
        theme={theme}
      />
    </div>
  );
}
