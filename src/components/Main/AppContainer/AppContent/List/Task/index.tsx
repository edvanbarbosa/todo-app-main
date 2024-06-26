import Itask from "../../../../../../pages/types/Itask";

export default function Task({ task, completed }: Itask) {
  return (
    <li>
      <input type="checkbox" />
      <p>{task}</p>
      <button>Remove</button>
    </li>
  );
}
