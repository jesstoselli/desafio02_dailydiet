import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../../screens/Home";
import { MEALS_COLLECTION } from "../storage.config";

export async function retrieveMeals() {
  try {
    const storedMeals = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: Meal[] = storedMeals ? JSON.parse(storedMeals) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
