import { TouchableOpacityProps } from "react-native";
import React from "react";
import {
  ButtonTypeStyleProps,
  Container,
  Icon,
  IconContainer,
  Title,
} from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  iconVisible?: boolean;
  iconName?: string;
  smallBtn?: boolean;
};

export function Button({
  title,
  type = "PRIMARY",
  iconVisible = false,
  iconName,
  smallBtn = false,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest} smallBtn={smallBtn}>
      {iconVisible && (
        <IconContainer type={type} iconVisible={iconVisible}>
          <Icon name={iconName} />
        </IconContainer>
      )}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
