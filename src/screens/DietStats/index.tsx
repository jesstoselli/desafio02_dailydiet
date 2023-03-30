import { useCallback, useId, useMemo, useState } from "react";
import { View, StatusBar } from "react-native";
import { useTheme } from "styled-components/native";

import { Header } from "../../components/Header";

import { NEGATIVE, NEUTRAL, POSITIVE } from "../../utils/AppConstants";

import { Meal } from "../Home";

import {
  Container,
  StatsContainer,
  StatsContent,
  StatsHeader,
  StatsInfo,
  Title,
} from "./styles";
import { retrieveDietStats } from "../../storage/stats/retrieveDietStats";
import { useFocusEffect } from "@react-navigation/native";

export interface DietStats {
  mealsWithinDietPercentage: string;
  bestStreak: number;
  quantityOfMeals: number;
  mealsWithinDiet: number;
  mealsOutOfDiet: number;
}

export function DietStats() {
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState<DietStats>();
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

  useFocusEffect(
    useCallback(() => {
      fetchDietStats();
    }, [])
  );

  async function fetchDietStats() {
    try {
      setIsLoading(true);
      const stats = await retrieveDietStats();
      setStats(stats);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const headerStatus = useMemo(() => {
    if (stats === undefined) return NEUTRAL;

    const percentage = (stats.mealsWithinDiet / meals.length) * 100;
    return percentage < 60 ? NEGATIVE : POSITIVE;
  }, []);

  const statusBarColor = useMemo(() => {
    return (
      (headerStatus === NEGATIVE && theme.COLORS.RED_LIGHT) ||
      (headerStatus === NEGATIVE && theme.COLORS.GREEN_LIGHT) ||
      theme.COLORS.GRAY_200
    );
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
        title={stats ? stats.mealsWithinDietPercentage : "0%"}
        subtitle={"das refeições dentro da dieta"}
      />
      <StatsContainer>
        <Title>Estatísticas Gerais</Title>
        <StatsContent type={NEUTRAL}>
          <StatsHeader>{stats ? stats.bestStreak : 0}</StatsHeader>
          <StatsInfo>melhor sequência de pratos dentro da dieta</StatsInfo>
        </StatsContent>
        <StatsContent type={NEUTRAL}>
          <StatsHeader>{stats ? stats.quantityOfMeals : 0}</StatsHeader>
          <StatsInfo>refeições registradas</StatsInfo>
        </StatsContent>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <StatsContent
            isSideBySide
            type={POSITIVE}
            style={{ marginRight: 12 }}
          >
            <StatsHeader>{stats ? stats.mealsWithinDiet : 0}</StatsHeader>
            <StatsInfo>refeições dentro da dieta</StatsInfo>
          </StatsContent>
          <StatsContent isSideBySide type={NEGATIVE}>
            <StatsHeader>{stats ? stats.mealsOutOfDiet : 0}</StatsHeader>
            <StatsInfo>refeições dentro da dieta</StatsInfo>
          </StatsContent>
        </View>
      </StatsContainer>
    </Container>
  );
}
