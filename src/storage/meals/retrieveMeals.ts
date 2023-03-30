import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealData } from "../../screens/Home";
import { MEALS_COLLECTION } from "../storage.config";

export async function retrieveMeals() {
  try {
    const storedMeals = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealData[] = storedMeals ? JSON.parse(storedMeals) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
