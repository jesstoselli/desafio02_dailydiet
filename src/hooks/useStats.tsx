import { useContext } from "react";
import { StatsContext } from "../contexts/StatsContext";

export function useStats() {
  const context = useContext(StatsContext);

  return context;
}
