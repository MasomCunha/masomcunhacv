import React from "react";
import { technologiesCard } from "../interface/technologies";
import "../style/tecnology.css"

export default function Technologies({ technology }: technologiesCard) {
  return <img className="tecnologyImage" src={technology.src} alt={technology.name} />;
}
