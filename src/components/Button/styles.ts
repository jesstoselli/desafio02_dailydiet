import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import { ICON_SHOW, PRIMARY, SECONDARY } from "../../utils/AppConstants";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

type iconProps = Props & {
  iconVisible: boolean;
};

type containerProps = Props & {
  smallBtn: boolean;
};

export const Container = styled(TouchableOpacity)<containerProps>`
  flex: 1;
  width: ${({ smallBtn }) => (smallBtn ? "50%" : "100%")};

  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) =>
    type === SECONDARY ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const IconContainer = styled.View<iconProps>`
  margin-right: 12px;

  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 6px;
  visibility: ${({ iconVisible }) => (iconVisible ? "visible" : "collapse")};
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === SECONDARY ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE,
}))``;

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  color: ${({ theme, type }) =>
    type === SECONDARY ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE}
`;
