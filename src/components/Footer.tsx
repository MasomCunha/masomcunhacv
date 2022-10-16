import React, { useContext } from "react";
//interface
import FooterInterface from "../interface/footers";
//context
import { CVContext } from "../context/CVContext";
//styles
import "../style/footerCV.css";

export default function Footer({ children }: FooterInterface) {
  const context = useContext(CVContext);

  return (
    <div
      className={`footerCV ${context?.isDarkMode ? "darkMode" : "ligthMode"}`}
    >
      <div className="footerCVIconTheme">{children}</div>
    </div>
  );
}
