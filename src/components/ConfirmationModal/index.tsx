import React from "react";
import { View } from "react-native";
import { SECONDARY } from "../../utils/AppConstants";
import { Button } from "../Button";
import { Container, Modal, ModalText } from "./styles";

type ConfirmationModalProps = {
  isVisible: boolean;
  onCancelRemoval: () => void;
  onRemove: () => void;
};

export function ConfirmationModal({
  isVisible = false,
  onCancelRemoval,
  onRemove,
}: ConfirmationModalProps) {
  return (
    <Container isVisible={isVisible}>
      <Modal>
        <ModalText>Deseja realmente excluir o registro da refeição?</ModalText>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            title={"Cancelar"}
            type={SECONDARY}
            onPress={onCancelRemoval}
          />
          <Button title={"Sim, excluir"} onPress={onRemove} />
        </View>
      </Modal>
    </Container>
  );
}
