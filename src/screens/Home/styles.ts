import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`;

export const HomeHeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const ProfilePic = styled.Image`
  width: 40px;
  height: 40px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 99px;
`;

export const MealsText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 40px;
  margin-bottom: 8px;
`;
