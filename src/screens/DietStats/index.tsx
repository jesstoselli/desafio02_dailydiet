import { useId, useMemo } from "react";
import { View, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";

import { Header } from "../../components/Header";

import { NEGATIVE, NEUTRAL, POSITIVE } from "../../utils/AppConstants";
import { formatPercentage } from "../../utils/FormattersHelpers";
import { filterLongestStreak } from "../../utils/CalculationsHelpers";

import { Meal } from "../Home";

import {
  Container,
  StatsContainer,
  StatsContent,
  StatsHeader,
  StatsInfo,
  Title,
} from "./styles";

export interface DietStats {
  mealsWithinDietPercentage: string;
  bestStreak: number;
  quantityOfMeals: number;
  mealsWithinDiet: number;
  mealsOutOfDiet: number;
}

export function DietStats() {
  const theme = useTheme();

  const mealId = useId();

  const meals: Meal[] = [
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
    {
      id: mealId,
      name: "Bolo de cenoura",
      time: "13:30",
      date: "14/03/23",
      description: "Bolo de cenoura",
      isWithinDiet: false,
    },
  ];

  function defineStats(mealsList: Meal[]): DietStats {
    // const mealsList = data.map((dataItem) => dataItem.data).flat();

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

  const stats: DietStats = useMemo(() => defineStats(meals), []);

  const headerStatus = useMemo(() => {
    const percentage = (stats.mealsWithinDiet / meals.length) * 100;
    return percentage < 60 ? NEGATIVE : POSITIVE;
  }, []);

  const statusBarColor = useMemo(() => {
    return headerStatus === NEGATIVE
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GREEN_LIGHT;
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={statusBarColor}
        translucent
      />
      <Header
        type={headerStatus}
        isDietStats
        title={stats.mealsWithinDietPercentage}
        subtitle={"das refeições dentro da dieta"}
      />
      <StatsContainer>
        <Title>Estatísticas Gerais</Title>
        <StatsContent type={NEUTRAL}>
          <StatsHeader>{stats.bestStreak}</StatsHeader>
          <StatsInfo>melhor sequência de pratos dentro da dieta</StatsInfo>
        </StatsContent>
        <StatsContent type={NEUTRAL}>
          <StatsHeader>{stats.quantityOfMeals}</StatsHeader>
          <StatsInfo>refeições registradas</StatsInfo>
        </StatsContent>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <StatsContent
            isSideBySide
            type={POSITIVE}
            style={{ marginRight: 12 }}
          >
            <StatsHeader>{stats.mealsWithinDiet}</StatsHeader>
            <StatsInfo>refeições dentro da dieta</StatsInfo>
          </StatsContent>
          <StatsContent isSideBySide type={NEGATIVE}>
            <StatsHeader>{stats.mealsOutOfDiet}</StatsHeader>
            <StatsInfo>refeições dentro da dieta</StatsInfo>
          </StatsContent>
        </View>
      </StatsContainer>
    </Container>
  );
}
