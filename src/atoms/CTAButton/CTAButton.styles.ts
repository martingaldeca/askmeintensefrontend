import { theme } from '@/constants/theme';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

type CTAButtonStyledProps = {
  buttontype?: 'standalone' | 'insideAction';
  primaryButton?: boolean;
  withMargin?: boolean;
  centered?: boolean;
  size?: 'small' | 'medium' | 'large';
  errorButton?: boolean;
  widthOption?: 'small' | 'medium' | 'big' | 'large' | 'full';
};

export const CTAButtonStyled = styled(Button, {
  shouldForwardProp: prop =>
    prop !== 'buttontype' &&
    prop !== 'primaryButton' &&
    prop !== 'withMargin' &&
    prop !== 'centered' &&
    prop !== 'size' &&
    prop !== 'errorButton' &&
    prop !== 'widthOption',
})<CTAButtonStyledProps>(({
  buttontype = 'standalone',
  primaryButton = true,
  withMargin = false,
  centered = true,
  size = 'medium',
  errorButton = false,
  widthOption = 'large',
}) => {
  let buttonWidth = theme.sizes.largeButton;
  switch (widthOption) {
    case 'small':
      buttonWidth = theme.sizes.smallButton;
      break;
    case 'medium':
      buttonWidth = theme.sizes.mediumButton;
      break;
    case 'big':
      buttonWidth = theme.sizes.bigButton;
      break;
    case 'large':
      buttonWidth = theme.sizes.largeButton;
      break;
    case 'full':
      buttonWidth = theme.sizes.fullButton;
      break;
  }

  return {
    width: buttonWidth,
    boxShadow: 'none',
    textTransform: 'none',
    borderRadius: theme.cardBorderRadius,
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: errorButton
      ? `${theme.colors.errorColor} !important`
      : primaryButton
        ? `${theme.colors.mainButtonColor} !important`
        : `${theme.colors.secondaryButtonColor} !important`,
    color: errorButton
      ? theme.colors.errorTextColor || theme.colors.mainButtonTextColor
      : primaryButton
        ? theme.colors.mainButtonTextColor
        : theme.colors.secondaryButtonTextColor,
    border: errorButton
      ? `1px solid ${theme.colors.errorColor} !important`
      : primaryButton
        ? `1px solid ${theme.colors.mainButtonTextColor} !important`
        : `1px solid ${theme.colors.secondaryButtonTextColor} !important`,

    ...(buttontype === 'standalone' && {
      height: theme.sizes.standaloneButtonHeight,
      margin: '0 auto',
      display: 'block',
    }),

    ...(withMargin && {
      marginTop: theme.sizes.mediumMargin,
      marginBottom: theme.sizes.mediumMargin,
    }),

    '&.Mui-disabled': {
      backgroundColor: errorButton
        ? theme.colors.errorColor
        : primaryButton
          ? theme.colors.mainButtonColor
          : theme.colors.secondaryButtonColor,
      color: errorButton
        ? theme.colors.errorTextColor || theme.colors.mainButtonTextColor
        : primaryButton
          ? theme.colors.mainButtonTextColor
          : theme.colors.secondaryButtonTextColor,
      border: errorButton
        ? `1px solid ${theme.colors.errorColor}`
        : primaryButton
          ? `1px solid ${theme.colors.mainButtonTextColor}`
          : `1px solid ${theme.colors.secondaryButtonTextColor}`,
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    ...(!centered && {
      marginLeft: 0,
      marginRight: 0,
    }),
    ...(size === 'small' && {
      height: theme.sizes.standaloneSmallButtonHeight,
      padding: 0,
    }),
  };
});
