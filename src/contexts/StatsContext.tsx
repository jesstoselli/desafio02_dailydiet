import { ReactNode, createContext, useState } from "react";
import { MealData } from "../screens/Home";
import { DietStats } from "../screens/DietStats";
import { retrieveDietStats } from "../storage/stats/retrieveDietStats";
import { saveDietStats } from "../storage/stats/saveDietStats";

export type StatsContextDataProps = {
  stats: DietStats;
  getStats: () => void;
  saveStats: (mealsDataList: MealData[]) => void;
};

type StatsContextProviderProps = {
  children: ReactNode;
};

export const StatsContext = createContext<StatsContextDataProps>(
  {} as StatsContextDataProps
);

export function MealContextProvider({ children }: StatsContextProviderProps) {
  const [stats, setStats] = useState<DietStats>({} as DietStats);

  async function getStats() {
    try {
      const retrievedStats = await retrieveDietStats();

      setStats(retrievedStats);
    } catch (error) {
      throw error;
    }
  }

  async function saveStats(mealsDataList: MealData[]) {
    try {
      await saveDietStats(mealsDataList);
    } catch (error) {
      throw error;
    }
  }

  return (
    <StatsContext.Provider value={{ stats, getStats, saveStats }}>
      {children}
    </StatsContext.Provider>
  );
}
