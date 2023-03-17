import { useNavigation } from "@react-navigation/native";
import {
  BackArrowIcon,
  Container,
  HeaderTypeStyleProps,
  Subtitle,
  Title,
  SimpleTitle,
  SimpleContainer,
} from "./styles";

type HeaderProps = {
  type: HeaderTypeStyleProps;
  isDietStats?: boolean;
  title: string;
  subtitle?: string;
};

export function Header({
  type,
  isDietStats = false,
  title,
  subtitle = "",
}: HeaderProps) {
  const navigation = useNavigation();

  function handleBackButton() {
    navigation.navigate("home");
  }

  if (isDietStats) {
    return (
      <Container type={type}>
        <BackArrowIcon name='arrow-left' onPress={handleBackButton} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    );
  } else {
    return (
      <SimpleContainer>
        <BackArrowIcon name='arrow-left' onPress={handleBackButton} />
        <SimpleTitle>{title}</SimpleTitle>
      </SimpleContainer>
    );
  }
}
