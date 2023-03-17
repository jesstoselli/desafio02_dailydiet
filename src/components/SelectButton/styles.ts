import styled, { css } from "styled-components/native";
import { NEGATIVE, POSITIVE, NEUTRAL } from "../../utils/AppConstants";

export type SelectTypeStyleProps = "POSITIVE" | "NEGATIVE" | "NEUTRAL";

type SelectButtonStyleProps = {
  type: SelectTypeStyleProps;
  btnDefinition: "POSITIVE" | "NEGATIVE";
  isSelected: boolean;
};

export const Container = styled.View<SelectButtonStyleProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;

  ${({ theme, type, isSelected }) => css`
    border-width: ${isSelected === true ? "1px" : "0px"};
    border-color: ${(type === NEGATIVE && theme.COLORS.RED_DARK) ||
    (type === POSITIVE && theme.COLORS.GREEN_DARK)};

    background-color: ${(type === POSITIVE && theme.COLORS.GREEN_LIGHT) ||
    (type === NEGATIVE && theme.COLORS.RED_LIGHT) ||
    (type === NEUTRAL && theme.COLORS.GRAY_600)};
  `}
`;

export const SelectButtonStatus = styled.View<SelectButtonStyleProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 99px;
  background-color: ${({ theme, btnDefinition }) =>
    btnDefinition === NEGATIVE
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GREEN_DARK};
`;

export const SelectButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
