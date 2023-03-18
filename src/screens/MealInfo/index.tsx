import { useMemo, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { NEGATIVE, POSITIVE, SECONDARY } from "../../utils/AppConstants";

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

import { Meal } from "../Home";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ConfirmationModal } from "../../components/ConfirmationModal";

type RouteParams = {
  meal: Meal;
};

export function MealInfo() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const label = useMemo(
    () => (meal.isWithinDiet ? "dentro da dieta" : "fora da dieta"),
    []
  );

  function handleEditMeal() {
    navigation.navigate("new-edit-meal", { meal });
  }

  function handleShowModal() {
    console.log("Excluir btn clicked");
    setShouldShowModal(true);
  }

  function handleRemoveMeal() {
    // TODO: Set logic for deleting meal
    setShouldShowModal(false);
  }

  function handleCancelRemove() {
    setShouldShowModal(false);
  }

  return (
    <Container>
      <ConfirmationModal
        isVisible={shouldShowModal}
        onCancelRemoval={handleCancelRemove}
        onRemove={handleRemoveMeal}
      />
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
        <Button
          title={"Editar refeição"}
          iconVisible
          iconName='edit-3'
          onPress={handleEditMeal}
        />
        <Button
          title={"Excluir refeição"}
          iconVisible
          iconName='trash-2'
          type={SECONDARY}
          style={{ marginTop: 8 }}
          onPress={handleShowModal}
        />
      </BottomButtonsContainer>
    </Container>
  );
}
