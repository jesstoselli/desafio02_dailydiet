import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { NEGATIVE, NEUTRAL, POSITIVE } from "../../utils/AppConstants";

export type StatsContentTypeStyleProps = "POSITIVE" | "NEGATIVE" | "NEUTRAL";

type StatsContentStyleProps = {
  type: StatsContentTypeStyleProps;
  isSideBySide?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const StatsContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex: 1;
  align-items: center;

  padding: 32px 24px;

  border-radius: 20px;
  /* position: absolute; */
  top: -60px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  margin-bottom: 24px;
`;

export const StatsContent = styled.View<StatsContentStyleProps>`
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;

  ${({ theme, type, isSideBySide }) => css`
    width: ${isSideBySide ? "50%" : "100%"};
    background-color: ${(type === POSITIVE && theme.COLORS.GREEN_LIGHT) ||
    (type === NEUTRAL && theme.COLORS.GRAY_500) ||
    (type === NEGATIVE && theme.COLORS.RED_LIGHT)};
  `};
`;

export const StatsHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const StatsInfo = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
  text-align: center;
`;
