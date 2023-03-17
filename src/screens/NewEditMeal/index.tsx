import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StatusBar, View } from "react-native";
import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/SelectButton";

import { NEGATIVE, NEUTRAL, POSITIVE } from "../../utils/AppConstants";

import {
  BottomButtonContainer,
  Container,
  FormContainer,
  Label,
} from "./styles";

export function NewEditMeal() {
  const [selectButton, setSelectButton] = useState<"Y" | "N" | null>();
  const theme = useTheme();
  const navigation = useNavigation();

  function handleAddNewMeal() {
    navigation.navigate("new-meal-created", { type: POSITIVE });
  }

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={theme.COLORS.GRAY_500}
        translucent
      />
      <Header type={NEUTRAL} title={"Nova refeição"} />
      <FormContainer>
        <Input label={"Nome"} />
        <Input label={"Descrição"} multiline />
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Input label={"Data"} isSideBySide />
          <Input label={"Hora"} isSideBySide />
        </View>

        <Label>Está dentro da dieta?</Label>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <SelectButton isSelected={false} btnDefinition={POSITIVE} />
          <SelectButton isSelected={true} btnDefinition={NEGATIVE} />
        </View>
      </FormContainer>
      <BottomButtonContainer>
        <Button title={"Cadastrar refeição"} onPress={handleAddNewMeal} />
      </BottomButtonContainer>
    </Container>
  );
}
