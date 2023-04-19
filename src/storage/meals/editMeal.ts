import { Meal } from "../../screens/Home";
import { createMeal } from "./createMeal";
import { deleteMeal } from "./deleteMeal";

export async function editMeal(meal: Meal) {
  try {
    await deleteMeal(meal.id);

    await createMeal(meal);
  } catch (error) {
    throw error;
  }
}
