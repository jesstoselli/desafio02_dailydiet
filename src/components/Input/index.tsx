import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, CustomInput, Label } from "./styles";

type InputProps = TextInputProps & {
  label: string;
  multiline?: boolean;
  isSideBySide?: boolean;
  inputRef?: RefObject<TextInput>;
};

export function Input({
  label,
  multiline = false,
  isSideBySide = false,
  inputRef,
  ...rest
}: InputProps) {
  const { COLORS } = useTheme();

  return (
    <Container isSideBySide={isSideBySide}>
      <Label>{label}</Label>
      <CustomInput
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        ref={inputRef}
        {...rest}
        placeholderTextColor={COLORS.GRAY_300}
      />
    </Container>
  );
}
