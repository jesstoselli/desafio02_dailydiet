import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

type InputContainerProps = {
  isSideBySide: boolean;
};

type InputProps = {
  multiline: boolean;
};

export const Container = styled.View<InputContainerProps>`
  flex: ${({ isSideBySide }) => (isSideBySide === true ? 1 : "none")};
  width: 100%;
  margin-bottom: 24px;
  align-items: flex-start;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  margin-bottom: 4px;
`;

export const CustomInput = styled(TextInput)<InputProps>`
  width: 100%;

  ${({ theme, multiline }) => css`
    min-height: ${multiline === true ? "120px" : "48px"};
    max-height: ${multiline === true ? "120px" : "48px"};
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding: 16px;
`;
