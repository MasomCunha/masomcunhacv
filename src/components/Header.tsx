import React, { useContext } from "react";
//interface
import HeaderInterface from "../interface/header";
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
      <div className="headerCVIconTheme">
        {children}

        {isLogged && (
          <div className="headerCVLogoutContainer">
            <span onClick={() => logout()}>
              <FiLogOut className="headerCVLogout" size={ICON_SIZE} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
