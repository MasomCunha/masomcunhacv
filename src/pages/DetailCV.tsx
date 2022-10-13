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
    <div className="detailCV">
      <div className="detailAvatarContainerCV">
        <AvatarCard
          classNameImage={"detailAvatarCV"}
          classNameText={`detailAvatarNameCV ${
            context?.isDarkMode ? "darkMode" : "ligthMode"
          }`}
          gitUser={gitUser}
        />
      </div>
      <div>
        <div className="detailTechnologyContainerCV">
          <div>
            <h3 className="technologyTitle">Technologies</h3>
            {CVTecno.map((technology, index) => (
              <Technologies key={index} technology={technology} />
            ))}
          </div>
        </div>
        <div>
          {CVData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
