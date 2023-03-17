import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type TokenStyleProps = {
  isWithinDiet: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const InfoContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex: 1;
  padding: 32px 24px;

  border-radius: 20px;
  top: -60px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const InfoText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-top: 8px;
`;

export const DateAndTimeTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  margin-top: 24px;
`;

export const WithinDietToken = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 144px;
  border-radius: 99px;

  padding: 8px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  margin-top: 24px;
`;

export const WithinDietTokenText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const WithinDietTokenStatus = styled.View<TokenStyleProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 99px;
  background-color: ${({ theme, isWithinDiet }) =>
    isWithinDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const BottomButtonsContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  padding: 24px;

  margin-bottom: 48px;
`;
