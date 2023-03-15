import { FlatList } from "react-native";
import { Meal } from "../../screens/Home";
import { PRIMARY, SECONDARY } from "../../utils/AppConstants";
import { MealItem } from "../MealItem";
import { Container, Title } from "./styles";

type DailyMealListProps = {
  date: string;
  mealList: Meal[];
};

export function DailyMealList({ date, mealList }: DailyMealListProps) {
  return (
    <Container>
      <FlatList
        data={mealList}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MealItem
            mealName={item.mealName}
            mealTime={item.mealTime}
            type={item.isWithinDiet ? PRIMARY : SECONDARY}
          />
        )}
        ListHeaderComponent={<Title>{date}</Title>}
      />
    </Container>
  );
}
