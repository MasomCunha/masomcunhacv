import { createContext } from "react";
import CVContextInterface from "../interface/CVContext";

export const CVContext = createContext<CVContextInterface | null>(null);