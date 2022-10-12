import React, { useContext } from "react";

//interface
import HeaderInterface from "../interface/Header";

//context
import { CVContext } from "../context/CVContext";
//styles
import "../style/headerCV.css";

export default function Header({ children } : HeaderInterface){

    const context = useContext(CVContext);

    return(
        <div className={`headerCV ${context?.isDarkMode ? "darkMode" : "ligthMode"}`}>
            {children}
        </div>
    )
}