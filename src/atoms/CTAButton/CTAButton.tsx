import React from 'react';
import { CTAButtonStyled } from '@/atoms/CTAButton/CTAButton.styles';

export type CTAButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'standalone' | 'insideAction';
  primaryButton?: boolean;
  withMargin?: boolean;
};

const CTAButton = (props: CTAButtonProps) => {
  return (
    <CTAButtonStyled
      onClick={props.onClick}
      disabled={props.disabled}
      buttontype={props.type}
      type="submit"
      primaryButton={props.primaryButton}
    >
      {props.text}
    </CTAButtonStyled>
  );
};

export default CTAButton;
