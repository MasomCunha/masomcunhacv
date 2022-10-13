import React from "react";
//interface
import ProjectInterface from "../interface/project";
//style
import "../style/projectCard.css";

export default function ProjectCard({ project, isDarkMode }: ProjectInterface) {
  return (
    <div className={`projectCardContainer ${isDarkMode ? "darkModeDetailsLetters" : "ligthModeDetailsLetters"}`}>
      <div className="projectCardHeader">
        <div className="projectCardTitleProject"><h4>{project.projectName}</h4></div>
        <div className="projectCardDetailsProject">
          <div><span>{project.company} - {project.startDate}</span></div>
        </div>
      </div>
      <div className="projectCardDescriptionProject"><span>{project.description}</span></div>
    </div>
  );
}
