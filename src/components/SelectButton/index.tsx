import { useMemo } from "react";
import {
  Container,
  SelectButtonStatus,
  SelectButtonText,
  SelectTypeStyleProps,
} from "./styles";
import { NEGATIVE, NEUTRAL } from "../../utils/AppConstants";

type SelectButtonProps = {
  isSelected: boolean;
  btnDefinition: "POSITIVE" | "NEGATIVE";
};

export function SelectButton({ isSelected, btnDefinition }: SelectButtonProps) {
  const label = useMemo(() => (btnDefinition === NEGATIVE ? "Não" : "Sim"), []);

  const definedType = () => {
    if (isSelected === false) {
      return NEUTRAL;
    } else return btnDefinition;
  };

  return (
    <Container
      type={definedType()}
      isSelected={isSelected}
      btnDefinition={btnDefinition}
    >
      <SelectButtonStatus
        type={definedType()}
        isSelected={isSelected}
        btnDefinition={btnDefinition}
      />
      <SelectButtonText>{label}</SelectButtonText>
    </Container>
  );
}
