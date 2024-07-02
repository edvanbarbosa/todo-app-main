import Itask from "../../../../../pages/types/Itask";
import style from "./TodoInfo.module.scss";

interface IProps {
  listOfTasks: Itask[];
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "active" | "completed">
  >;
  setTaskList: React.Dispatch<React.SetStateAction<Itask[]>>;
  theme: "light" | "dark";
}

export default function TodoInfo({
  listOfTasks,
  setFilter,
  setTaskList,
  theme
}: IProps) {
    
  return (
    <div className={`${style.todoInfo}  ${theme==='light'?style.todoInfoLight:style.todoInfoDark}`}>
      <p className="itens-left">
        {
          listOfTasks.filter((task) => !task.completed).length //Filtrar as tasks que não estão completas
        }{" "}
        Itens Left
      </p>

      <ul className={`${style.filter}`}>
        <li onClick={() => setFilter("all")}>All</li>
        <li onClick={() => setFilter("active")}>Active</li>
        <li onClick={() => setFilter("completed")}>Completed</li>
      </ul>

      <button
        onClick={() =>
          setTaskList(
            (oldTasks) => oldTasks?.filter((task) => !task.completed) //Filtrar as tasks que não estão completas
          )
        }
      >
        Clear Complete
      </button>
    </div>
  );
}
