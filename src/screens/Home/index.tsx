import { useNavigation } from "@react-navigation/native";
import { useEffect, useId, useState } from "react";
import { SectionList, StatusBar } from "react-native";

// Components
import { Button } from "../../components/Button";
import { EmptyList } from "../../components/EmptyList";
import { PercentageInfo } from "../../components/PercentageInfo";
import { PRIMARY, SECONDARY } from "../../utils/AppConstants";

import {
  Container,
  HomeHeaderContainer,
  Logo,
  MealSectionContainer,
  MealSectionTitle,
  MealsText,
  ProfilePic,
} from "./styles";

import logo from "../../assets/Logo.png";
import { MealItem } from "../../components/MealItem";
import { formatDate, formatPercentage } from "../../utils/Formatters";
import { DietStats } from "../DietStats";

export interface Meal {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  isWithinDiet: boolean;
}

export interface MealProps {
  sectionDate: string;
  data: Meal[];
}

export function Home() {
  const [data, setData] = useState<MealProps[]>([]);
  // const [dailyStats, setDailyStats] = useState<>()

  const navigation = useNavigation();
  const mealId = useId();

  function defineStats() {
    const mealsList = data.map((dataItem) => dataItem.data).flat();

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

    // return {
    // mealsWithinDietPercentage,
    //   bestSequence,
    //   quantityOfMeals,
    //   mealsWithinDiet,
    //   mealsOutOfDiet,
    // };
  }

  function handleNewMeal() {
    navigation.navigate("new-edit-meal", null);
  }

  function handleMealStats() {
    navigation.navigate("stats");
  }

  function handleMealItemClick(meal: Meal) {
    navigation.navigate("meal", { meal });
  }

  useEffect(() => {
    const meals: MealProps[] = [
      {
        sectionDate: "16.03.23",
        data: [
          {
            id: mealId,
            name: "Batata frita",
            time: "20:00",
            date: "16/03/23",
            description: "Batata frita com bacon",
            isWithinDiet: false,
          },
          {
            id: mealId,
            name: "Salada",
            time: "13:00",
            date: "16/03/23",
            description: "Salada caesar do Outback",
            isWithinDiet: true,
          },
        ],
      },
      {
        sectionDate: "15.03.23",
        data: [
          {
            id: mealId,
            name: "Iogurte",
            time: "20:00",
            date: "15/03/23",
            description: "Iogurte grego da Vigor",
            isWithinDiet: true,
          },
          {
            id: mealId,
            name: "Feijão",
            time: "12:30",
            date: "15/03/23",
            description: "Feijão tropeiro com farofa e couve na manteiga",
            isWithinDiet: false,
          },
        ],
      },
      {
        sectionDate: "14.03.23",
        data: [
          {
            id: mealId,
            name: "Iogurte",
            time: "20:00",
            date: "14/03/23",
            description: "Iogurte grego da Vigor",
            isWithinDiet: true,
          },
          {
            id: mealId,
            name: "Feijão",
            time: "12:30",
            date: "14/03/23",
            description: "Feijão tropeiro com farofa e couve na manteiga",
            isWithinDiet: false,
          },
        ],
      },
    ];

    setData(meals);
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
        iconVisible
        iconName={"plus"}
        onPress={handleNewMeal}
      />

      <MealSectionContainer>
        <SectionList
          style={{ flex: 1 }}
          sections={data}
          keyExtractor={(meal, index) => meal.id + index}
          renderItem={({ item: meal }) => (
            <MealItem
              mealName={meal.name}
              mealTime={meal.time}
              type={meal.isWithinDiet ? PRIMARY : SECONDARY}
              onPress={() => handleMealItemClick(meal)}
            />
          )}
          renderSectionHeader={({ section }) => (
            <MealSectionTitle>{section.sectionDate}</MealSectionTitle>
          )}
          showsVerticalScrollIndicator={false}
          fadingEdgeLength={300}
          ListEmptyComponent={EmptyList}
        />
      </MealSectionContainer>
    </Container>
  );
}
