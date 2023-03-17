import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  FlatList,
  SectionList,
  SectionListData,
  StatusBar,
} from "react-native";

import uuid from "react-native-uuid";

// Components
import { Button } from "../../components/Button";
import { MealSectionHeader } from "../../components/MealSectionHeader";
import { EmptyList } from "../../components/EmptyList";
import { PercentageInfo } from "../../components/PercentageInfo";
import { ICON_SHOW, PRIMARY, SECONDARY } from "../../utils/AppConstants";

import {
  Container,
  HomeHeaderContainer,
  Logo,
  MealsText,
  ProfilePic,
} from "./styles";

import logo from "../../assets/Logo.png";
import { MealItem } from "../../components/MealItem";

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

export type MealSection = SectionListData<
  {
    id: string | number[];
    mealName: string;
    mealTime: string;
    isWithinDiet: boolean;
  },
  { sectionDate: string }
>;

export interface MealProps {
  sectionDate: string;
  data: Meal[];
}

export function Home() {
  const [data, setData] = useState<MealProps[]>([]);

  const navigation = useNavigation();

  function handleNewMeal() {
    navigation.navigate("new-meal");
  }

  function handleMealStats() {
    navigation.navigate("stats");
  }

  useEffect(() => {
    const meals: MealProps[] = [
      {
        sectionDate: "16.03.23",
        data: [
          {
            id: String(uuid.v4()),
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
      {
        sectionDate: "15.03.23",
        data: [
          {
            id: String(uuid.v4()),
            mealName: "Yogurte",
            mealTime: "20:00",
            isWithinDiet: true,
          },
          {
            id: uuid.v4(),
            mealName: "Feijão tropeiro",
            mealTime: "12:30",
            isWithinDiet: false,
          },
        ],
      },
      {
        sectionDate: "14.03.23",
        data: [
          {
            id: String(uuid.v4()),
            mealName: "Yogurte",
            mealTime: "20:00",
            isWithinDiet: true,
          },
          {
            id: uuid.v4(),
            mealName: "Feijão tropeiro",
            mealTime: "12:30",
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
        iconVisibility={ICON_SHOW}
        iconName={"plus"}
        onPress={handleNewMeal}
      />

      <SectionList
        style={{ flex: 1 }}
        sections={data}
        keyExtractor={(meal) => String(meal.id)}
        renderItem={({ item: meal, index, section }) => (
          <MealItem
            mealName={meal.mealName}
            mealTime={meal.mealTime}
            type={meal.isWithinDiet ? PRIMARY : SECONDARY}
          />
        )}
        renderSectionHeader={({ section }) => (
          <MealSectionHeader date={section.sectionDate} />
        )}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={300}
        ListEmptyComponent={EmptyList}
      />
    </Container>
  );
}
