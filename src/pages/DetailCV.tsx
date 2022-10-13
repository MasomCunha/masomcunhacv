import React, { useContext } from "react";
//components
import ProjectCard from "../components/ProjectCard";
import AvatarCard from "../components/AvatarCard";
import Technologies from "../components/Technologies";
//context
import { CVContext } from "../context/CVContext";
//hooks
import { useAppSelector } from "../hooks/useAppSelector";
//interface
import * as gitUserInterface from "../interface/gitUser";
//style
import "../style/detailCV.css";

import { CVTecno } from "../utils/data";
import { CVData } from "../utils/data";

export default function DetailCV() {
  const context = useContext(CVContext);

  const gitUser: gitUserInterface.gitUser | null = useAppSelector(
    (state) => state.gitUser.gitUser
  );

  return (
    <div className={`detailCV ${ context?.isDarkMode ? "detailDarkMode" : "detailLightMode"}`}>
      <div className="detailAvatarContainerCV">
        <AvatarCard
          classNameImage={"detailAvatarCV"}
          classNameText={`detailAvatarNameCV ${
            context?.isDarkMode ? "darkModeDetailsLetters" : "ligthModeDetailsLetters"
          }`}
          gitUser={gitUser}
        />
      </div>
      <div>
        <div className="detailTechnologyContainerCV">
          <div>
            <h3
              className={`technologyTitle ${
                context?.isDarkMode ? "darkModeDetailsLetters" : "ligthModeDetailsLetters"
              }`}
            >
              Technologies
            </h3>
            {CVTecno.map((technology, index) => (
              <Technologies key={index} technology={technology} />
            ))}
          </div>
        </div>
        <div className="detailProjectsContainerCV">
          <div className="projectDetailContainer">
            <h3
              className={`technologyTitle ${
                context?.isDarkMode ? "darkModeDetailsLetters" : "ligthModeDetailsLetters"
              }`}
            >
              Project List
            </h3>
            {CVData.map((project, index) => (
              <ProjectCard key={index} project={project} isDarkMode={context?.isDarkMode}/>
            ))}
          </div>
          <div className="repositoryDetailContainer">
            <h3
              className={`technologyTitle ${
                context?.isDarkMode ? "darkModeDetailsLetters" : "ligthModeDetailsLetters"
              }`}
            >
              Repository List
            </h3>
            {CVData.map((project, index) => (
              <ProjectCard key={index} project={project} isDarkMode={context?.isDarkMode}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
