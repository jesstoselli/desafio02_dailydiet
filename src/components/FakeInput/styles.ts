import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
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

export const FakeInputButton = styled.Button`
  width: 100%;

  ${({ theme }) => css`
    min-height: 48px;
    max-height: 48px;
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding: 16px;
`;
