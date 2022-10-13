import React from "react";
//interface
import ProjectInterface from "../interface/project";
//hooks
import { useCountDays } from "../hooks/useCountDays";
//style
import "../style/projectCard.css";

export default function ProjectCard({ project, isDarkMode }: ProjectInterface) {

  const {years, hours, minutes} = useCountDays(project.startDate);

  return (
    <div className={`projectCardContainer ${isDarkMode ? "darkModeDetailsLetters" : "ligthModeDetailsLetters"}`}>
      <div className="projectCardHeader">
        <div className="projectCardTitleProject"><h4>{project.projectName}</h4></div>
        <div className="projectCardDetailsProject">
          <div><span>{project.company} - {years}Y{hours}H{minutes}M</span></div>
        </div>
      </div>
      <div className="projectCardDescriptionProject"><span>{project.description}</span></div>
    </div>
  );
}
