import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewEditMeal } from "../screens/NewEditMeal";
import { NewMealCreated } from "../screens/NewMealCreated";
import { MealInfo } from "../screens/MealInfo";
import { DietStats } from "../screens/DietStats";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='new-edit-meal' component={NewEditMeal} />
      <Screen name='new-meal-created' component={NewMealCreated} />
      <Screen name='meal' component={MealInfo} />
      <Screen name='stats' component={DietStats} />
    </Navigator>
  );
}
// loads the first route as initial app route
