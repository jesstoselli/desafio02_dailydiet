import { useMemo } from "react";
import { StatusBar, Text } from "react-native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Header } from "../../components/Header";
import { NEGATIVE, NEUTRAL, POSITIVE } from "../../utils/AppConstants";
import {
  Container,
  StatsContainer,
  StatsContent,
  StatsHeader,
  StatsInfo,
  Title,
} from "./styles";

export function DietStats() {
  const theme = useTheme();

  // const statusBarColor = useMemo(() =>
  //   return switch()
  // , [])

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={theme.COLORS.GREEN_LIGHT}
        translucent
      />
      <Header
        type={POSITIVE}
        isDietStats
        title={"90,86%"}
        subtitle={"das refeições dentro da dieta"}
      />
      <StatsContainer>
        <Title>Estatísticas Gerais</Title>
        <StatsContent type={NEUTRAL}>
          <StatsHeader>22</StatsHeader>
          <StatsInfo>melhor sequência de pratos dentro da dieta</StatsInfo>
        </StatsContent>
        <StatsContent type={NEUTRAL}>
          <StatsHeader>109</StatsHeader>
          <StatsInfo>refeições registradas</StatsInfo>
        </StatsContent>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <StatsContent
            isSideBySide
            type={POSITIVE}
            style={{ marginRight: 12 }}
          >
            <StatsHeader>99</StatsHeader>
            <StatsInfo>refeições dentro da dieta</StatsInfo>
          </StatsContent>
          <StatsContent isSideBySide type={NEGATIVE}>
            <StatsHeader>10</StatsHeader>
            <StatsInfo>refeições dentro da dieta</StatsInfo>
          </StatsContent>
        </View>
      </StatsContainer>
    </Container>
  );
}
