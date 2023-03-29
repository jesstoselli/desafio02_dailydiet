import { Meal } from "../screens/Home";

function filterLongestStreak(listOfMeals: Meal[]) {
  let currentStreak = 0;
  let longestStreak = 0;

  for (let i = 0; i < listOfMeals.length; i++) {
    if (listOfMeals[i].isWithinDiet === true) {
      currentStreak++;
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return longestStreak;
}

export { filterLongestStreak };
