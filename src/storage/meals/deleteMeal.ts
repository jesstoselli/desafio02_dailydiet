import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealData } from "../../screens/Home";
import { MEALS_COLLECTION } from "../storage.config";
import { retrieveMeals } from "./retrieveMeals";

export async function deleteMeal(mealId: string) {
  try {
    const storedMealDataList = await retrieveMeals();

    const filteredMealDataList = storedMealDataList.map((mealData) => {
      const filteredMeals = mealData.data.filter((meal) => meal.id !== mealId);
      return {
        sectionDate: mealData.sectionDate,
        data: filteredMeals,
      };
    });

    await AsyncStorage.setItem(
      MEALS_COLLECTION,
      JSON.stringify(filteredMealDataList)
    );
  } catch (error) {
    throw error;
  }
}
