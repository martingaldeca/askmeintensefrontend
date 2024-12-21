import React from 'react';
import { CTAButtonStyled } from '@/atoms/CTAButton/CTAButton.styles';

export type CTAButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
};

const CTAButton = (props: CTAButtonProps) => {
  return (
    <CTAButtonStyled onClick={props.onClick} disabled={props.disabled} type="submit">
      {props.text}
    </CTAButtonStyled>
  );
};
export default CTAButton;
