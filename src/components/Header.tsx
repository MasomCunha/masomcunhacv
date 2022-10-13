import React, { useContext } from "react";
//interface
import HeaderInterface from "../interface/Header";
//context
import { CVContext } from "../context/CVContext";
//icons
import { FiLogOut } from "react-icons/fi";
//styles
import { ICON_SIZE } from "../style/constants";
import "../style/headerCV.css";

export default function Header({
  children,
  isLogged,
  logout,
}: HeaderInterface) {
  const context = useContext(CVContext);

  return (
    <div
      className={`headerCV ${context?.isDarkMode ? "darkMode" : "ligthMode"}`}
    >
      <div className="headerCVIconTheme">{children}</div>
      {isLogged && (
        <span onClick={() => logout()}>
          <FiLogOut className="headerCVLogout" size={ICON_SIZE} />
        </span>
      )}
    </div>
  );
}
