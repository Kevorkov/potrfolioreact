import "./BtnDarkmode.css"
import { useEffect} from "react";
import { useLocalStorage } from "../../utils/UseLocalStorage";

import sun from "./sun.svg";
import moon from "./moon.svg";
import DetectDarkMode from "../../utils/DetectDarkMode";


const BtnDarkmode = () => {

    const [darkMode,setDarkMode]=useLocalStorage('darkMode',DetectDarkMode());
 


    useEffect(()=>{
        if (darkMode==='light'){
            document.body.classList.add('dark')
        }
        else{
            document.body.classList.remove('dark')
        }
    },[darkMode])

    useEffect(()=>{
        window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
    });
    },[setDarkMode])


    const toggleDarkMode = ()=>{setDarkMode((currentvalue) => {
       return currentvalue ==='light' ? 'dark' : 'light'  
    })};

    const btnNormal ='dark-mode-btn';
    const btnActive ='dark-mode-btn dark-mode-btn--active';

    return ( 
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
     );
}
 
export default BtnDarkmode;