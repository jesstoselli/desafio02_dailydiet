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
  type?: ContainerTypeStyleProps;
};
export function PercentageInfo({
  type = POSITIVE,
  ...rest
}: PercentageInfoProps) {
  return (
    <Container type={type} {...rest}>
      <ArrowIcon name='arrow-up-right' />
      <PercentageText>90,86%</PercentageText>
      <InfoText>das refeições dentro da dieta</InfoText>
    </Container>
  );
}
