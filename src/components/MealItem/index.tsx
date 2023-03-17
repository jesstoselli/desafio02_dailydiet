import { TouchableOpacityProps } from "react-native";
import { PRIMARY } from "../../utils/AppConstants";
import {
  Container,
  Divider,
  Meal,
  MealItemTypeStyleProps,
  MealStatus,
  Time,
} from "./styles";

type MealItemProps = TouchableOpacityProps & {
  type?: MealItemTypeStyleProps;
  mealName: string;
  mealTime: string;
};

export function MealItem({
  mealName,
  mealTime,
  type = PRIMARY,
  ...rest
}: MealItemProps) {
  return (
    <Container {...rest}>
      <Time>{mealTime}</Time>
      <Divider />
      <Meal>{mealName}</Meal>
      <MealStatus type={type} />
    </Container>
  );
}
