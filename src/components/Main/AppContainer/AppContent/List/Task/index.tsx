import Itask from "../../../../../../pages/types/Itask";
import Cross from "../../../../../../assets/images/icon-cross.svg";
import style from "./Task.module.scss";

export default function Task({ task, completed }: Itask) {
  return (
    <li draggable="true" className={`${style.task}`}>
      <label className={`${style.checkTask}`}>
        <input
          name="checkbox"
          id="checkbox"
          type="checkbox"
          onClick={(event) => {
            let eventTarget = event.target as HTMLInputElement; //Informando o tipo do target
            if (eventTarget.checked) {
              completed = true;
            }
          }}
        />
        <div className={`${style.checkmark}`}></div>
      </label>

      <p>{task}</p>
      <span className={`${style.delete}`}>
        <img src={Cross} alt="delete" />
      </span>
    </li>
  );
}
