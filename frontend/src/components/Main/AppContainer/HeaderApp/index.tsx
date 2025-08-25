import ImgBg from "../ImgBg";
import style from './HeaderApp.module.scss'

interface IProps{
    setTheme: React.Dispatch<React.SetStateAction<'light'|'dark'>>
    theme: 'light'| 'dark'
}

export default function HeaderApp({theme,setTheme}:IProps){
    return(
        <div className={`${style.headerApp}`}>
            <h1>Todo</h1>
            <ImgBg themeAgo={theme} setTheme={setTheme}/>
        </div>
    )
}