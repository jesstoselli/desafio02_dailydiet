import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { useRoute } from "@react-navigation/native";

import { Meal } from "../Home";

import {
  BottomButtonsContainer,
  Container,
  DateAndTimeTitle,
  InfoContainer,
  InfoText,
  Title,
  WithinDietToken,
  WithinDietTokenStatus,
  WithinDietTokenText,
} from "./Styles";
import { Header } from "../../components/Header";
import { NEGATIVE, POSITIVE, SECONDARY } from "../../utils/AppConstants";
import { useMemo } from "react";
import { Button } from "../../components/Button";

type RouteParams = {
  meal: Meal;
};

export function MealInfo() {
  const theme = useTheme();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const label = useMemo(
    () => (meal.isWithinDiet ? "dentro da dieta" : "fora da dieta"),
    []
  );

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={theme.COLORS.GRAY_500}
        translucent
      />
      <Header
        type={!meal.isWithinDiet ? NEGATIVE : POSITIVE}
        title={"Refeição"}
      />

      <InfoContainer>
        <Title>{meal.name}</Title>
        <InfoText>{meal.description}</InfoText>
        <DateAndTimeTitle>Data e hora</DateAndTimeTitle>
        <InfoText>
          {meal.date} às {meal.time}
        </InfoText>
        <WithinDietToken>
          <WithinDietTokenStatus isWithinDiet={meal.isWithinDiet} />
          <WithinDietTokenText>{label}</WithinDietTokenText>
        </WithinDietToken>
      </InfoContainer>

      <BottomButtonsContainer>
        <Button title={"Editar refeição"} iconVisible iconName='edit-3' />
        <Button
          title={"Excluir refeição"}
          iconVisible
          iconName='trash-2'
          type={SECONDARY}
          style={{ marginTop: 8 }}
        />
      </BottomButtonsContainer>
    </Container>
  );
}
