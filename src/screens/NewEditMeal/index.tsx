import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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

type FormDataProps = {
  name: string;
  description: string;
  time: string;
  date: string;
};

export function NewEditMeal() {
  const [selectButton, setSelectButton] = useState<"P" | "N" | null>(null);
  const theme = useTheme();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

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
        <Controller
          control={control}
          name='name'
          render={({ field: { onChange, value } }) => (
            <Input label={"Nome"} onChangeText={onChange} value={value} />
          )}
        />

        <Controller
          control={control}
          name='description'
          render={({ field: { onChange, value } }) => (
            <Input
              label={"Descrição"}
              multiline
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <View style={{ flexDirection: "row", gap: 20 }}>
          <Controller
            control={control}
            name='date'
            render={({ field: { onChange, value } }) => (
              <Input
                label={"Data"}
                isSideBySide
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name='time'
            render={({ field: { onChange, value } }) => (
              <Input
                label={"Hora"}
                isSideBySide
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>

        <Label>Está dentro da dieta?</Label>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <SelectButton
            isSelected={
              selectButton === null || selectButton === "N" ? false : true
            }
            btnDefinition={POSITIVE}
          />
          <SelectButton
            isSelected={
              selectButton === null || selectButton === "P" ? false : true
            }
            btnDefinition={NEGATIVE}
          />
        </View>
      </FormContainer>
      <BottomButtonContainer>
        <Button title={"Cadastrar refeição"} onPress={handleAddNewMeal} />
      </BottomButtonContainer>
    </Container>
  );
}
