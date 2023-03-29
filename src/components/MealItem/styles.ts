import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { SECONDARY } from "../../utils/AppConstants";

export type MealItemTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: MealItemTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  min-height: 49px;
  max-height: 49px;

  padding: 14px 12px;
  margin-top: 8px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  margin: 0 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Meal = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const MealStatus = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 99px;
  background-color: ${({ theme, type }) =>
    type === SECONDARY ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
`;
