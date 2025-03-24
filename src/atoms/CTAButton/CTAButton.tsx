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
  centered?: boolean;
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  widthOption?: 'small' | 'medium' | 'big' | 'large' | 'full';
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
      centered={props.centered}
      size={props.size}
      errorButton={props.error}
      widthOption={props.widthOption}
    >
      {buttonText}
    </CTAButtonStyled>
  );
};

export default CTAButton;
