import AsyncStorage from "@react-native-async-storage/async-storage";

import { Meal, MealData } from "../../screens/Home";

import { AppError } from "../../utils/AppError";

import { MEALS_COLLECTION } from "../storage.config";
import { saveDietStats } from "../stats/saveDietStats";
import { retrieveMeals } from "./retrieveMeals";

export async function createMeal(meal: Meal) {
  try {
    const storedMealsDataList = await retrieveMeals();

    const mealIsAlreadyStored = storedMealsDataList.find((storedMealData) =>
      storedMealData.data.find((storedMeal) => storedMeal.id === meal.id)
    );

    if (!!mealIsAlreadyStored) {
      throw new AppError("Já existe uma refeição cadastrada com esse id.");
    }

    const newMeal: MealData = { sectionDate: meal.date, data: [meal] };

    saveDietStats([...storedMealsDataList, newMeal]);

    const sectionDateIsRegistered = storedMealsDataList.find(
      (mealData) => mealData.sectionDate === newMeal.sectionDate
    );

    let storage: string;

    if (!sectionDateIsRegistered) {
      storage = JSON.stringify([...storedMealsDataList, newMeal]);
    } else {
      const newDataList: MealData[] = [];

      storedMealsDataList.forEach((storedMealsData) => {
        if (storedMealsData.sectionDate === newMeal.sectionDate) {
          const dataList = storedMealsData.data;
          storedMealsData.data = [...dataList, newMeal.data[0]];
          newDataList.push(storedMealsData);
        } else {
          newDataList.push(storedMealsData);
        }
      });
      storage = JSON.stringify([...newDataList]);
    }

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
