import React from "react";
//components
import ProjectCard from "../components/ProjectCard";
//hooks
import { useAppSelector } from "../hooks/useAppSelector";
//interface
import * as gitUserInterface from "../interface/gitUser";

import { CVData } from "../utils/data";


export default function DetailCV() {

  const gitUser: gitUserInterface.gitUser | null = useAppSelector((state) => state.gitUser.gitUser);


  console.log(gitUser)

  return <div>
    {JSON.stringify(gitUser)}
    
    {
      CVData.map((project, index) => <ProjectCard key={index} project={project}/>)
    }
    </div>;
}
