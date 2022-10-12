import React, { useContext } from "react";
//context
import { CVContext } from "../context/CVContext";
//styles
import "../style/switchTheme.css";

export default function SwitchTheme(){

    const context = useContext(CVContext);

    return(
        <div className="switchThemeCV" onClick={() => context?.setDarkMode(!context?.isDarkMode)}>
            <span>Swith Theme</span>
        </div>
    )
}