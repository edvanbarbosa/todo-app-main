import IconMoon from '../../../../assets/images/icon-moon.svg';
import IconSun from '../../../../assets/images/icon-sun.svg'

interface IProps{
    setTheme: React.Dispatch<React.SetStateAction<'light'|'dark'>>,
    themeAgo: 'light'| 'dark'
}
export default function ImgBg({setTheme,themeAgo}:IProps){

    return(
        <img onClick={()=> {themeAgo==='light'?setTheme('dark'):setTheme('light'); console.log(themeAgo)} } src={ themeAgo==='light'?IconMoon:IconSun} alt='Mudar tema'/>
    )
}