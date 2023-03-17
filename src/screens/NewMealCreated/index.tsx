import { View, Text, StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import {
  Container,
  Illustration,
  NewMealTypeStyleProps,
  Subtitle,
  SubtitleHighlight,
  Title,
} from "./styles";
import { useMemo } from "react";
import { NEGATIVE } from "../../utils/AppConstants";
import { Button } from "../../components/Button";

import positiveImg from "../../assets/IllustrationPositive.png";
import negativeImg from "../../assets/IllustrationNegative.png";

type RouteParams = {
  type: NewMealTypeStyleProps;
};

export function NewMealCreated() {
  const theme = useTheme();
  const navigation = useNavigation();

  const route = useRoute();
  const { type } = route.params as RouteParams;

  function handleGoToHome() {
    navigation.navigate("home");
  }

  const title = useMemo(
    () => (type === NEGATIVE ? "Que pena!" : "Continue assim!"),
    []
  );

  const subtitleWithHighlight = useMemo(() => {
    const highlight = type === NEGATIVE ? "saiu da dieta" : "dentro da dieta";
    const textPart1 = type === NEGATIVE ? "Você " : "Você continua ";
    const textPart2 =
      type === NEGATIVE
        ? " dessa vez, mas continue \n se esforçando e não desista!"
        : ". Muito bem!";

    return (
      <View style={{ marginVertical: 8 }}>
        <Subtitle>
          {textPart1}
          <SubtitleHighlight>{highlight}</SubtitleHighlight>
          {textPart2}
        </Subtitle>
      </View>
    );
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={theme.COLORS.GRAY_700}
        translucent
      />
      <Title type={type}>{title}</Title>
      {subtitleWithHighlight}

      <Illustration source={type === NEGATIVE ? negativeImg : positiveImg} />

      <Button
        onPress={handleGoToHome}
        title={"Ir para página inicial"}
        style={{ paddingVertical: 16, paddingHorizontal: 24 }}
        smallBtn
      />
    </Container>
  );
}
