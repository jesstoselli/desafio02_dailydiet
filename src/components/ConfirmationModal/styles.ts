import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

type ModalContainerProps = {
  isVisible: boolean;
};

export const Container = styled.View<ModalContainerProps>`
  /* display: block; */
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex: 1;
  padding: 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1d1b1e99;
`;

export const Modal = styled.View`
  padding: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
