import React from "react";
//hooks
import { useAppSelector } from "../hooks/useAppSelector";
//interface
import * as gitUserInterface from "../interface/gitUser"


export default function DetailCV() {

  const gitUser: gitUserInterface.gitUser | null = useAppSelector((state) => state.gitUser.gitUser);


  console.log(gitUser)

  return <div>{JSON.stringify(gitUser)}</div>;
}
