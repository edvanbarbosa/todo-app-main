import List from "./List";
import TodoInfo from "./TodoInfo";
import style from "./AppContent.module.scss";
import Itask from "../../../../pages/types/Itask";
import { useEffect, useState } from "react";
import Form from "./Form";
import ListWrapper from "./ListWrapper";

interface IProps {
  theme: "light" | "dark";
}

export default function AppContent({ theme }: IProps) {
  const tasksInStorage = localStorage.getItem("tasks");
  const [tasks = [], setTaskList] = useState<Itask[]>([...JSON.parse(tasksInStorage || "[]")]);


  useEffect(() => { // Salvar taks no localStorage toda vez que a lista de tasks for alterada	
    tasks?localStorage.setItem("tasks", JSON.stringify(tasks)): localStorage.setItem("tasks", JSON.stringify([])); 

  }, [tasks]);
  

  return (
    <div className={style.AppContent}>
      <Form theme={theme} setTaskList={setTaskList} />
      <ListWrapper theme={theme} tasks={tasks} setTaskList={setTaskList} />
    </div>
  );
}
