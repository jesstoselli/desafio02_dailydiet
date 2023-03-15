import { TouchableOpacityProps } from "react-native";
import React from "react";
import {
  ButtonIconVisibilityProps,
  ButtonTypeStyleProps,
  Container,
  Icon,
  IconContainer,
  Title,
} from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  iconVisibility?: ButtonIconVisibilityProps;
  iconName?: string;
};

export function Button({
  title,
  type = "PRIMARY",
  iconVisibility = "HIDE",
  iconName,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <IconContainer type={type} iconVisibility={iconVisibility}>
        <Icon name={iconName} />
      </IconContainer>
      <Title type={type}>{title}</Title>
    </Container>
  );
}
