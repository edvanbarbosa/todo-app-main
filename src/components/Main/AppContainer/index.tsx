import AppContent from "./AppContent";
import HeaderApp from "./HeaderApp";

export default function AppContainer(){
    return(
        <div>
            <HeaderApp/>
            <AppContent/>
            <p>Drag and drop to reorder list</p>
        </div>
    )
}