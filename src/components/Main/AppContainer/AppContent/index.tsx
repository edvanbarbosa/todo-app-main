import List from "./List";
import TodoInfo from "./TodoInfo";
import style from "./AppContent.module.scss";
import Itask from "../../../../pages/types/Itask";
import { useState } from "react";
import Form from "./Form";
import ListWrapper from "./ListWrapper";

interface IProps {
  theme: "light" | "dark";
}

export default function AppContent({ theme }: IProps) {
  const tasksInStorage = localStorage.getItem("tasks");
  const [tasks = [], setTaskList] = useState<Itask[]>([...JSON.parse(tasksInStorage || "[]")]);
  const tasksForStorage: Itask[] = tasks;

  const setTasks = (taskss: ()=> Itask[]) => {
    setTaskList(taskss);
    tasksForStorage.push(...taskss());
    localStorage.setItem("tasks", JSON.stringify(tasksForStorage));
    
  }
  

  return (
    <div className={style.AppContent}>
      <Form theme={theme} setTaskList={setTasks} />
      <ListWrapper theme={theme} tasks={tasks} setTaskList={setTasks} />
    </div>
  );
}
