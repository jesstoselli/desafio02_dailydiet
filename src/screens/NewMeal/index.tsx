import { useState } from "react";
import { StatusBar, View } from "react-native";
import { useTheme } from "styled-components/native";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/SelectButton";

import { NEGATIVE, NEUTRAL, POSITIVE } from "../../utils/AppConstants";

import { Container, FormContainer, Label } from "./styles";

export function NewMeal() {
  const [selectButton, setSelectButton] = useState<"Y" | "N" | null>();
  const theme = useTheme();

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
    </Container>
  );
}
