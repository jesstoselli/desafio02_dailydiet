import { ReactNode, createContext, useState } from "react";
import { DietStats } from "../screens/DietStats";
import { retrieveDietStats } from "../storage/stats/retrieveDietStats";

export type StatsContextDataProps = {
  stats: DietStats;
  getStats: () => void;
};

type StatsContextProviderProps = {
  children: ReactNode;
};

export const StatsContext = createContext<StatsContextDataProps>(
  {} as StatsContextDataProps
);

export function StatsContextProvider({ children }: StatsContextProviderProps) {
  const [stats, setStats] = useState<DietStats>({} as DietStats);

  async function getStats() {
    try {
      const retrievedStats = await retrieveDietStats();

      setStats(retrievedStats);
    } catch (error) {
      throw error;
    }
  }

  return (
    <StatsContext.Provider value={{ stats, getStats }}>
      {children}
    </StatsContext.Provider>
  );
}
