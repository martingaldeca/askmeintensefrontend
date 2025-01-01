import React, { ElementType } from 'react';
import { IconButtonProps } from '@mui/material';
import { CustomIconButtonStyled } from '@/atoms/CustomIconButton/CustomIconButton.styles';

export type CustomIconButtonProps = IconButtonProps & {
  icon: ElementType;
  iconColor?: string;
  handler: () => void;
};

const CustomIconButton = ({ icon: Icon, iconColor, handler, ...props }: CustomIconButtonProps) => {
  return (
    <CustomIconButtonStyled onClick={handler} {...props}>
      <Icon style={{ color: iconColor }} />
    </CustomIconButtonStyled>
  );
};

export default CustomIconButton;
