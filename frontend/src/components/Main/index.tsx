import AppContainer from "./AppContainer";
import style from "./Main.module.scss";

interface IProps{
    theme: 'light'| 'dark'
    setTheme: React.Dispatch<React.SetStateAction<'light'|'dark'>>
}

export default function Main({theme, setTheme}:IProps){
    return(
        <main className={`${style.main}`}>
            <AppContainer theme={theme} setTheme={setTheme} />
        </main>
    )
}