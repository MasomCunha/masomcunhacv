import React from "react";
//components
import ProjectCard from "../components/ProjectCard";
import AvatarCard from "../components/AvatarCard";
//hooks
import { useAppSelector } from "../hooks/useAppSelector";
//interface
import * as gitUserInterface from "../interface/gitUser";
//style
import "../style/detailCV.css";

import { CVData } from "../utils/data";

export default function DetailCV() {
  const gitUser: gitUserInterface.gitUser | null = useAppSelector(
    (state) => state.gitUser.gitUser
  );

  return (
    <div className="detailCV">
      <div className="detailAvatarContainerCV">
        <AvatarCard classNameImage={"detailAvatarCV"} classNameText={"detailAvatarNameCV"} gitUser={gitUser}/>
      </div>
      <div>
        {CVData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
