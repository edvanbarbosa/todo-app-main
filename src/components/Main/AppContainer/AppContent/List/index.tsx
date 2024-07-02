import Itask from "../../../../../pages/types/Itask";
import Task from "./Task";
import style from "./List.module.scss";
import { Key } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

interface propsType {
  finishTask: (taskCompleted: Itask, action: boolean) => void;
  listForRender: Itask[];
  setListForRender: React.Dispatch<React.SetStateAction<Itask[]>>;
  deleteTask: (taskToDelete: Itask) => void;
  filter: "all" | "active" | "completed";
  theme: "light" | "dark";
}

function filterInList(
  listForRender: Itask[],
  filter: "all" | "active" | "completed"
) {
  //Função para filtrar as tasks
  switch (filter) {
    case "all":
      return listForRender;
    case "active":
      return listForRender.filter((task) => !task.completed);
    case "completed":
      return listForRender.filter((task) => task.completed);
    default:
      return listForRender;
  }
}

function reoder<T>(list:T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;

}



export default function List({
  listForRender,
  finishTask,
  deleteTask,
  filter,
  theme,
  setListForRender
}: propsType) {
  return (
    <DragDropContext onDragEnd={(result)=>{
      if (!result.destination) {
        return;
      }
    
      const items = reoder(
        listForRender,
        result.source.index,
        result.destination.index
      );
    
      setListForRender(items);
    }}>
      <Droppable droppableId="tasks" type="list" direction="vertical">
        {(provided) => (
          <ul
            className={`${style.listOfTasks}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filterInList(listForRender, filter).map(
              (task: Itask, index) => (
                <Task
                  theme={theme}
                  key={task.id}
                  index={index}
                  finishTask={finishTask}
                  deleteTask={deleteTask}
                  {...task}
                />
              )
            )}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
