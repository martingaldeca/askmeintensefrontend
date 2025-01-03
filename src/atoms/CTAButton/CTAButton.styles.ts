import { theme } from '@/constants/theme';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

type CTAButtonStyledProps = {
  buttontype?: 'standalone' | 'insideAction';
  primaryButton?: boolean;
  withMargin?: boolean;
  centered?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export const CTAButtonStyled = styled(Button, {
  shouldForwardProp: prop =>
    prop !== 'buttontype' &&
    prop !== 'primaryButton' &&
    prop !== 'withMargin' &&
    prop !== 'centered' &&
    prop !== 'size',
})<CTAButtonStyledProps>(
  ({ buttontype = 'standalone', primaryButton = true, withMargin = false, centered = true, size = 'medium' }) => ({
    width: '80%',
    boxShadow: 'none',
    textTransform: 'none',
    borderRadius: theme.cardBorderRadius,
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: primaryButton
      ? `${theme.colors.mainButtonColor} !important`
      : `${theme.colors.secondaryButtonColor} !important`,
    color: primaryButton ? theme.colors.mainButtonTextColor : theme.colors.secondaryButtonTextColor,
    border: primaryButton
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
      backgroundColor: primaryButton ? theme.colors.mainButtonColor : theme.colors.secondaryButtonColor,
      color: primaryButton ? theme.colors.mainButtonTextColor : theme.colors.secondaryButtonTextColor,
      border: primaryButton
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
      width: '70%',
      height: theme.sizes.standaloneSmallButtonHeight,
      padding: 0,
    }),
  }),
);
