import AppContent from "./AppContent";
import HeaderApp from "./HeaderApp";
import style from './AppContainer.module.scss'

export default function AppContainer(){
    return(
        <div className={`${style.AppContainer}`}>
            <HeaderApp/>
            <AppContent/>
            <p>Drag and drop to reorder list</p>
        </div>
    )
}