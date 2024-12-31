import React from 'react';
import { CTAButtonStyled } from '@/atoms/CTAButton/CTAButton.styles';

export type CTAButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'standalone' | 'insideAction';
  primaryButton?: boolean;
  withMargin?: boolean;
  submit?: boolean;
  disabledText?: string;
};

const CTAButton = (props: CTAButtonProps) => {
  const buttonText = props.disabled && props.disabledText ? props.disabledText : props.text;

  return (
    <CTAButtonStyled
      onClick={props.onClick}
      disabled={props.disabled}
      buttontype={props.type}
      type={props.submit ? 'submit' : 'button'}
      primaryButton={props.primaryButton}
      withMargin={props.withMargin}
    >
      {buttonText}
    </CTAButtonStyled>
  );
};

export default CTAButton;
