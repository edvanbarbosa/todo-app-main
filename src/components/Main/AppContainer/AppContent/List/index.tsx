import Itask from "../../../../../pages/types/Itask";
import Task from "./Task";
import style from "./List.module.scss";
import { Key, useState } from "react";

interface propsType{
  tasks: Itask[];
  finishTask: (taskCompleted: Itask, action:boolean) => void;
  deleteTask: (taskToDelete: Itask) => void;
}

export default function List({tasks,finishTask,deleteTask}: propsType) {
 

  return (
    <ul className={`${style.listOfTasks}`}>
      {tasks.map((task: Itask, index: Key) => (
        <Task key={index} finishTask={finishTask} deleteTask={deleteTask} {...task} />
      ))}
    </ul>
  );
}
