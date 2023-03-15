import {
  BackArrowIcon,
  Container,
  HeaderTypeStyleProps,
  InfoText,
  PercentageText,
} from "./styles";

type HeaderProps = {
  type: HeaderTypeStyleProps;
};

export function Header({ type }: HeaderProps) {
  return (
    <Container type={type}>
      <BackArrowIcon name='arrow-left' />
      <PercentageText>90,86%</PercentageText>
      <InfoText>das refeições dentro da dieta</InfoText>
    </Container>
  );
}
