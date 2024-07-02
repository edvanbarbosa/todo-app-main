import AppContent from "./AppContent";
import HeaderApp from "./HeaderApp";
import style from './AppContainer.module.scss'

interface IProps{
    setTheme: React.Dispatch<React.SetStateAction<'light'|'dark'>>
    theme: 'light'| 'dark'
}

export default function AppContainer({theme, setTheme}:IProps){
    return(
        <div className={`${style.AppContainer} ${theme==='light'?style.AppContainerLight:style.AppContainerDark}`}>
            <HeaderApp theme={theme} setTheme={setTheme}/>
            <AppContent theme={theme}/>
            <p>Drag and drop to reorder list</p>
        </div>
    )
}