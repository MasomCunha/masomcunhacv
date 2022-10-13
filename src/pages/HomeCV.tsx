import React from "react";
//hooks
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
//actions
import { getGitUserInformation } from "../redux/actions/gitHubUserActions";
import { login } from "../redux/actions/authActions";
//icons
import { FaGithub } from "react-icons/fa";
//style
import "../style/homeCV.css";

export default function HomeCV() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getGitUserInformation());
    dispatch(login(true));
    navigate("/detailCV");
  };

  return (
    <div className="homeCV">
      <div>
        <div className="homeCVTextBox">
          <h1 className="homeCVH1">Welcome to my space!</h1>
          <h2 className="homeCVH2">Click on github icon to see my details</h2>
        </div>
        <div className="homeCVButtonContainer">
          <FaGithub className="homeCVButton" onClick={() => handleClick()} />
        </div>
      </div>
    </div>
  );
}
