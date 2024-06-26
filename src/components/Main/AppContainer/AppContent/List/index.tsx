import Itask from "../../../../../pages/types/Itask";
import Task from "./Task";

export default function List() {
  const tasks: Itask[] = [
    {
      task: "Task 1",
      completed: false,
    },
    {
      task: "Task 2",
      completed: true,
    },
    {
      task: "Task 3",
      completed: false,
    },
  ];

  return (
    <ul>
      {tasks.map((task, index) => {
        return <Task key={index} task={task.task} completed={task.completed} />;
      })}
    </ul>
  );
}
