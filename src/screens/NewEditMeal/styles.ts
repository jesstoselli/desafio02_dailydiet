import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const FormContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  flex: 1;
  align-items: center;

  padding: 32px 24px;

  border-radius: 20px;
  top: -60px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  margin-bottom: 4px;
  align-self: flex-start;
`;

export const BottomButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  padding: 24px;
  margin-bottom: 24px;
`;
