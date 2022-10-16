import { createContext } from "react";
import CVContextInterface from "../interface/cvContexts";

export const CVContext = createContext<CVContextInterface | null>(null);