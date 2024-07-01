import List from "./List";
import TodoInfo from "./TodoInfo";
import style from "./AppContent.module.scss";
import Itask from "../../../../pages/types/Itask";
import { useState } from "react";
import Form from "./Form";
import ListWrapper from "./ListWrapper";

export default function AppContent() {
  const [tasks=[], setTaskList] = useState<Itask[]>([]); 

  return (
    <div className={style.AppContent}>
      <Form setTaskList={setTaskList}/>
      <ListWrapper tasks={tasks} setTaskList={setTaskList}/>
    </div>
  );
}
