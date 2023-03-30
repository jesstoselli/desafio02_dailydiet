import { TouchableOpacityProps } from "react-native";

import {
  Container,
  ArrowIcon,
  ContainerTypeStyleProps,
  PercentageText,
  InfoText,
} from "./styles";

import { POSITIVE } from "../../utils/AppConstants";

type PercentageInfoProps = TouchableOpacityProps & {
  percentage: string;
  type?: ContainerTypeStyleProps;
};
export function PercentageInfo({
  percentage,
  type = POSITIVE,
  ...rest
}: PercentageInfoProps) {
  return (
    <Container type={type} {...rest}>
      <ArrowIcon name='arrow-up-right' />
      <PercentageText>{percentage}</PercentageText>
      <InfoText>das refeições dentro da dieta</InfoText>
    </Container>
  );
}
