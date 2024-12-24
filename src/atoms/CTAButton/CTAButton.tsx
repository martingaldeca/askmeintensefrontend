import React from 'react';
import { CTAButtonStyled } from '@/atoms/CTAButton/CTAButton.styles';

export type CTAButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'standalone' | 'insideAction';
};

const CTAButton = (props: CTAButtonProps) => {
  return (
    <CTAButtonStyled
      onClick={props.onClick}
      disabled={props.disabled}
      buttontype={props.type}
      type="submit"
    >
      {props.text}
    </CTAButtonStyled>
  );
};

export default CTAButton;
