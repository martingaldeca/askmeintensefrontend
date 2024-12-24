import React from "react";
import { CustomChipStyled } from "./Chip.styles";

export type CustomChipProps = {
  text: string;
  primary?: boolean;
  variant?: "filled" | "outlined";
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
}

const CustomChip = (props: CustomChipProps) => {
  return (
    <CustomChipStyled
      label={props.text}
      variant={props.variant ? props.variant : "outlined"}
      primary={props.primary}
      onClick={props.onClick}
      disabled={props.disabled ? props.disabled : false}
    />
  )
}

export default CustomChip;