import React from "react";
//interface
import ProjectInterface from "../interface/project";


export default function ProjectCard({ project } : ProjectInterface){

    return(
        <div>
            <div>{project.company}</div>
            <div>{project.startDate}</div>
            <div>{project.projectName}</div>
            <div>{project.description}</div>
        </div>
    )

}