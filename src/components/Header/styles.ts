import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { NEGATIVE, NEUTRAL, POSITIVE } from "../../utils/AppConstants";

export type HeaderTypeStyleProps = "POSITIVE" | "NEGATIVE" | "NEUTRAL";

type HeaderStyleProps = {
  type: HeaderTypeStyleProps;
};

export const Container = styled.View<HeaderStyleProps>`
  width: 100%;
  align-items: center;
  justify-content: center;

  padding-bottom: 64px;

  height: 200px;
  background-color: ${({ theme, type }) =>
    (type === POSITIVE && theme.COLORS.GREEN_LIGHT) ||
    (type === NEGATIVE && theme.COLORS.RED_LIGHT)};
`;

export const BackArrowIcon = styled(Feather).attrs<HeaderStyleProps>(
  ({ theme, type }) => ({
    size: 24,
    color:
      (type === POSITIVE && theme.COLORS.GREEN_DARK) ||
      (type === NEUTRAL && theme.COLORS.GRAY_200) ||
      (type === NEGATIVE && theme.COLORS.RED_DARK),
  })
)`
  position: absolute;
  top: 8px;
  left: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Subtitle = styled.Text`
  margin-top: 2px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const SimpleContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  padding-bottom: 64px;

  height: 132px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const SimpleTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;
