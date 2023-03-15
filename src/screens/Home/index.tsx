import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";

import uuid from "react-native-uuid";

// Components
import { Button } from "../../components/Button";
import { DailyMealList } from "../../components/DailyMealList";
import { EmptyList } from "../../components/EmptyList";
import { PercentageInfo } from "../../components/PercentageInfo";
import { ICON_SHOW } from "../../utils/AppConstants";

import {
  Container,
  HomeHeaderContainer,
  Logo,
  MealsText,
  ProfilePic,
} from "./styles";

import logo from "../../assets/Logo.png";

export interface Meal {
  id: string | number[];
  mealName: string;
  mealTime: string;
  isWithinDiet: boolean;
}

interface MealList {
  id: string | number[];
  date: string;
  dailyMeals: Meal[];
}

export function Home() {
  const [mealList, setMealList] = useState<MealList[]>([]);

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("new-meal");
  }

  function handleMealStats() {
    navigation.navigate("stats");
  }

  useEffect(() => {
    const meals: MealList[] = [
      {
        id: uuid.v4(),
        date: Date(),
        dailyMeals: [
          {
            id: uuid.v4(),
            mealName: "Batata frita",
            mealTime: "20:00",
            isWithinDiet: false,
          },
          {
            id: uuid.v4(),
            mealName: "Salada",
            mealTime: "13:00",
            isWithinDiet: true,
          },
        ],
      },
    ];

    setMealList(meals);
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <HomeHeaderContainer>
        <Logo source={logo} />
        <ProfilePic
          source={{
            uri: "https://avatars.githubusercontent.com/u/54954987?v=4",
          }}
        />
      </HomeHeaderContainer>
      <PercentageInfo onPress={handleMealStats} />

      <MealsText>Refeições:</MealsText>
      <Button
        title={"Nova Refeição"}
        iconVisibility={ICON_SHOW}
        iconName={"plus"}
        onPress={handleNewMeal}
      />

      <FlatList
        data={mealList}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <DailyMealList date={item.date} mealList={item.dailyMeals} />
        )}
        contentContainerStyle={mealList.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message='Cadastre uma refeição para vê-la na lista.' />
        )}
      />
    </Container>
  );
}
