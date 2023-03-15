import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DietStats } from "../screens/DietStats";
import { Home } from "../screens/Home";
import { NewMeal } from "../screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='new-meal' component={NewMeal} />
      <Screen name='stats' component={DietStats} />
    </Navigator>
  );
}
// loads the first route as initial app route
