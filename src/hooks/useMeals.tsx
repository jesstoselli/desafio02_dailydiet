import { useContext } from "react";
import { MealContext } from "../contexts/MealsContext";

export function useMeals() {
  const context = useContext(MealContext);

  return context;
}
