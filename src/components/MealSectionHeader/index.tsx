import { Container, Title } from "./styles";

type MealSectionHeaderProps = {
  date: string;
};

export function MealSectionHeader({ date }: MealSectionHeaderProps) {
  return (
    <Container>
      <Title>{date}</Title>
    </Container>
  );
}
