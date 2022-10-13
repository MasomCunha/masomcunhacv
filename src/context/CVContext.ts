import { createContext } from "react";
import CVContextInterface from "../interface/cvContext";

export const CVContext = createContext<CVContextInterface | null>(null);