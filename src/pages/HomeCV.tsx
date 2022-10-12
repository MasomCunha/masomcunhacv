import React from "react";
//hooks
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
//components
import Button from "../components/Button";
//actions
import { getGitUserInformation } from "../redux/actions/gitHubUserActions";
import { login } from "../redux/actions/authActions";


export default function HomeCV() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getGitUserInformation())
    dispatch(login())
    navigate("/detailCV")
  }

  return(
  <div>
    <Button className="homeCVButton" handleClick={handleClick} title={"Click me!"}/>
  </div>)
}
