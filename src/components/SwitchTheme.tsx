import React, { useContext } from "react";
//context
import { CVContext } from "../context/CVContext";
//icons
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";
//styles
import { ICON_SIZE } from "../style/constants";
import "../style/switchTheme.css";

export default function SwitchTheme() {
  const context = useContext(CVContext);

  return (
    <div
      className="switchThemeCV"
      onClick={() => context?.setDarkMode(!context?.isDarkMode)}
      title={context?.isDarkMode ? "Turn to light mode" : "Turn to dark mode"}
    >
      {context?.isDarkMode ? (
        <BsFillLightbulbFill className="switchThemeIconCV" size={ICON_SIZE}/>
      ) : (
        <BsFillLightbulbOffFill className="switchThemeIconCV" size={ICON_SIZE}/>
      )}
    </div>
  );
}
