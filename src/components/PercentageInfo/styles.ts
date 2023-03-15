import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { NEGATIVE, POSITIVE } from "../../utils/AppConstants";

export type ContainerTypeStyleProps = "POSITIVE" | "NEGATIVE";

type PercentageInfoStyleProps = {
  type: ContainerTypeStyleProps;
};

export const Container = styled.TouchableOpacity<PercentageInfoStyleProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === POSITIVE ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ArrowIcon = styled(Feather).attrs<PercentageInfoStyleProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === NEGATIVE ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
  })
)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const PercentageText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const InfoText = styled.Text`
  margin-top: 2px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `};
`;
