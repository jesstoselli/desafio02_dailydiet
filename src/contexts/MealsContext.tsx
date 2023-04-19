import { ReactNode, createContext, useState } from "react";
import { Meal, MealData } from "../screens/Home";
import { retrieveMeals } from "../storage/meals/retrieveMeals";
import { createMeal as createMealFromStorage } from "../storage/meals/createMeal";
import { deleteMeal as deleteMealFromStorage } from "../storage/meals/deleteMeal";
import { editMeal as editMealFromStorage } from "../storage/meals/editMeal";

export type MealContextDataProps = {
  meals: MealData[];
  getMeals: () => void;
  createMeal: (meal: Meal) => void;
  deleteMeal: (mealId: string) => void;
  editMeal: (meal: Meal) => void;
};

type MealContextProviderProps = {
  children: ReactNode;
};

export const MealContext = createContext<MealContextDataProps>(
  {} as MealContextDataProps
);

export function MealContextProvider({ children }: MealContextProviderProps) {
  const [meals, setMeals] = useState<MealData[]>([{} as MealData]);

  async function getMeals() {
    try {
      const mealDataList = await retrieveMeals();

      setMeals(mealDataList);
    } catch (error) {
      throw error;
    }
  }

  async function createMeal(meal: Meal) {
    try {
      await createMealFromStorage(meal);
    } catch (error) {
      throw error;
    }
  }

  async function deleteMeal(mealId: string) {
    try {
      await deleteMealFromStorage(mealId);
    } catch (error) {
      throw error;
    }
  }

  async function editMeal(meal: Meal) {
    try {
      await editMealFromStorage(meal);
    } catch (error) {
      throw error;
    }
  }

  return (
    <MealContext.Provider
      value={{ meals, getMeals, createMeal, deleteMeal, editMeal }}
    >
      {children}
    </MealContext.Provider>
  );
}
