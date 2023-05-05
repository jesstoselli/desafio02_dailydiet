import { useTheme } from "styled-components/native";
import { Container, FakeInputButton, Label } from "./styles";

type FakeInputProps = {
  label: string;
  date: string;
};

export function FakeInput({ label, date, ...rest }: FakeInputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <FakeInputButton title={date} {...rest} />
    </Container>
  );
}
