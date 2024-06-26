import List from "./List";
import TodoInfo from "./TodoInfo";

export default function AppContent() {
    return (
        <div>
            <input type="text" placeholder="Create a new todo..."/>
           
            <div className="List-Wrapper">
                <List/>
                <TodoInfo/>
            </div>
           
        </div>
    )
}