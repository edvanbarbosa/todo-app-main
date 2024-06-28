import MountainsLightBackground from '../../assets/images/bg-desktop-light.jpg'
import style from './Header.module.scss'
export default function Header (){
    return(
        <header className= {`${style.header}`}>
            <img src={MountainsLightBackground} alt="" aria-hidden="true" />
        </header>
    )
}