import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { SectionList, StatusBar } from "react-native";

// Components
import { Button } from "../../components/Button";
import { EmptyList } from "../../components/EmptyList";
import { PercentageInfo } from "../../components/PercentageInfo";
import { MealItem } from "../../components/MealItem";

import { PRIMARY, SECONDARY } from "../../utils/AppConstants";
import { formatPercentage } from "../../utils/FormattersHelpers";
import { DietStats } from "../DietStats";

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
import { retrieveDietStats } from "../../storage/stats/retrieveDietStats";
import { retrieveMeals } from "../../storage/meals/retrieveMeals";

export interface Meal {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  isWithinDiet: boolean;
}

export interface MealData {
  sectionDate: string;
  data: Meal[];
}

export function Home() {
  const [mealData, setMealData] = useState<MealData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dietStats, setDietStats] = useState<DietStats>();

  const navigation = useNavigation();
  const mealId = useId();

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
    const meals: MealData[] = [
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

    setMealData(meals);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchMealsDataListAndDietStats();
    }, [])
  );

  async function fetchMealsDataListAndDietStats() {
    try {
      setIsLoading(true);
      const stats = await retrieveDietStats();
      const mealDataList = await retrieveMeals();

      setMealData(mealDataList);
      setDietStats(stats);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const mealsWithinDietPercentage = useMemo(() => {
    if (dietStats) {
      return formatPercentage(
        dietStats?.mealsWithinDiet,
        dietStats?.quantityOfMeals
      );
    } else {
      return "0%";
    }
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
      <PercentageInfo
        percentage={mealsWithinDietPercentage}
        onPress={handleMealStats}
      />

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
          sections={mealData}
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
function filterLongestStreak(mealsList: Meal[]) {
  throw new Error("Function not implemented.");
}
