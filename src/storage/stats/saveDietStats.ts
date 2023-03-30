import AsyncStorage from "@react-native-async-storage/async-storage";

import { filterLongestStreak } from "../../utils/CalculationsHelpers";
import { formatPercentage } from "../../utils/FormattersHelpers";

import { deleteDietStats } from "./deleteDietStats";

import { DietStats } from "../../screens/DietStats";
import { MealData } from "../../screens/Home";
import { DIET_STATS_COLLECTION } from "../storage.config";

export async function saveDietStats(mealsDataList: MealData[]) {
  try {
    await deleteDietStats();

    const stats = defineStats(mealsDataList);

    await AsyncStorage.setItem(DIET_STATS_COLLECTION, JSON.stringify(stats));
  } catch (error) {
    throw error;
  }
}

function defineStats(mealsDataList: MealData[]): DietStats {
  const mealsList = mealsDataList.map((dataItem) => dataItem.data).flat();

  const bestStreak = filterLongestStreak(mealsList);

  const quantityOfMeals = mealsList.length;

  const mealsWithinDiet = mealsList.filter(
    (meal) => meal.isWithinDiet === true
  ).length;

  const mealsOutOfDiet = mealsList.filter(
    (meal) => meal.isWithinDiet === false
  ).length;

  const mealsWithinDietPercentage = formatPercentage(
    mealsWithinDiet,
    mealsList.length
  );

  return {
    mealsWithinDietPercentage,
    bestStreak,
    quantityOfMeals,
    mealsWithinDiet,
    mealsOutOfDiet,
  };
}
