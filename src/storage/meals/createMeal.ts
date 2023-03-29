import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../../screens/Home";
import { AppError } from "../../utils/AppError";
import { MEALS_COLLECTION } from "../storage.config";
import { retrieveMeals } from "./retrieveMeals";

export async function createMeal(newMeal: Meal) {
  try {
    const storedMeals = await retrieveMeals();

    const mealIsAlreadyStored = storedMeals.find(
      (storedMeal) => storedMeal.id === newMeal.id
    );

    if (!!mealIsAlreadyStored) {
      throw new AppError("Já existe uma refeição cadastrada com esse id.");
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
