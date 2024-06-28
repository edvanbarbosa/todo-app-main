import AppContainer from "./AppContainer";
import style from "./Main.module.scss";

export default function Main(){
    return(
        <main className={`${style.main}`}>
            <AppContainer/>
        </main>
    )
}