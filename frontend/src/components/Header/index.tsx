import LightBackground from '../../assets/images/bg-desktop-light.jpg'
import DarkBackground from '../../assets/images/bg-desktop-dark.jpg'
import style from './Header.module.scss'

export default function Header ({theme}: {theme: 'light'|'dark'}){
    return(
        <header className= {`${style.header}`}>
            <img src={theme==='light'?LightBackground:DarkBackground} alt="" aria-hidden="true" />
        </header>
    )
}