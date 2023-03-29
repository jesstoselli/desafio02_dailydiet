import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storage.config";
import { retrieveMeals } from "./retrieveMeals";

export async function deleteMeal(mealId: string) {
  try {
    const storedMeals = await retrieveMeals();

    const deletedMeal = storedMeals.find((meal) => meal.id === mealId);

    const newMealsList = storedMeals.filter((meal) => meal.id !== mealId);

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newMealsList));
    await AsyncStorage.removeItem(`${MEALS_COLLECTION}-${deletedMeal}`);
  } catch (error) {
    throw error;
  }
}
