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
  const [tasks = [], setTaskList] = useState<Itask[]>([]);

  return (
    <div className={style.AppContent}>
      <Form theme={theme} setTaskList={setTaskList} />
      <ListWrapper theme={theme} tasks={tasks} setTaskList={setTaskList} />
    </div>
  );
}
