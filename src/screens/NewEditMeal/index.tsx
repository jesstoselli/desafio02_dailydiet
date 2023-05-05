import { useCallback, useMemo, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Controller, useForm } from "react-hook-form";
import { NativeEventEmitter, Platform, StatusBar, View } from "react-native";
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
import moment, { min } from "moment";
import { FakeInput } from "../../components/FakeInput";

type FormDataProps = {
  name: string;
  description: string;
  time: string;
  date: string;
};

export function NewEditMeal() {
  const [selectButton, setSelectButton] = useState<"P" | "N" | null>(null);
  const [chosenDate, setChosenDate] = useState<string>();
  const [minimumDate, setMinimumDate] = useState<Date>();
  const [maximumDate, setMaximumDate] = useState<Date>();

  const theme = useTheme();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const currentDate = new Date();
      console.log(currentDate?.toLocaleDateString("pt-Br"));
      if (currentDate != undefined) {
        setChosenDate(typeof currentDate.toLocaleDateString("pt-Br"));
      }

      const minYear = new Date().setUTCFullYear(
        currentDate.getUTCFullYear() - 1
      );
      const minDate = new Date(minYear);
      setMinimumDate(minDate);

      const maxDay = new Date().setUTCDate(currentDate.getUTCDate() + 1);
      const maxDate = new Date(maxDay);

      setMaximumDate(maxDate);
    }, [])
  );

  function manageTimeStamp(
    event: DateTimePickerEvent,
    date?: Date | undefined
  ) {
    console.log(date?.toLocaleDateString("pt-Br"));
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  function handleAddNewMeal({ name, description, date, time }: FormDataProps) {
    console.log(name, description, date, time);

    // navigation.navigate("new-meal-created", { type: POSITIVE });
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
          {/* <Controller
            control={control}
            name='date'
            render={({ field: { onChange, value } }) => (
              <Input
                label={"Data"}
                keyboardType='numeric'
                isSideBySide
                onChangeText={onChange}
                value={value}
              />
            )}
          /> */}

          <FakeInput label='Data' date={chosenDate} />

          <DateTimePicker
            mode='date'
            value={new Date()}
            onChange={manageTimeStamp}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
          />

          <Controller
            control={control}
            name='time'
            render={({ field: { onChange, value } }) => (
              <Input
                label={"Hora"}
                isSideBySide
                keyboardType='numeric'
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
        <Button
          title={"Cadastrar refeição"}
          onPress={handleSubmit(handleAddNewMeal)}
        />
      </BottomButtonContainer>
    </Container>
  );
}
