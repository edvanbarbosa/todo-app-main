import ImgBg from "../ImgBg";
import style from './HeaderApp.module.scss'

export default function HeaderApp(){
    return(
        <div className={`${style.headerApp}`}>
            <h1>Todo</h1>
            <ImgBg/>
        </div>
    )
}