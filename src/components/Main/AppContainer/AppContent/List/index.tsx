import Itask from "../../../../../pages/types/Itask";
import Task from "./Task";
import style from "./List.module.scss";
import { Key } from "react";

interface propsType{
  tasks: Itask[];
}

export default function List(tasks: propsType) {

  return (
    <ul className={`${style.listOfTasks}`}>
      {tasks.tasks.map((task: Itask, index: Key) => (
        <Task key={index} task={task.task} completed ={task.completed} />
      ))}
    </ul>
  );
}
