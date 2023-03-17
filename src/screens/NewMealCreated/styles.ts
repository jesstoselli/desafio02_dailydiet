import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { NEGATIVE } from "../../utils/AppConstants";

export type NewMealTypeStyleProps = "POSITIVE" | "NEGATIVE";

type TitleProps = {
  type: NewMealTypeStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) => css`
    color: ${type === NEGATIVE
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  text-align: center;
`;

export const SubtitleHighlight = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Illustration = styled.Image`
  margin: 32px;
`;
