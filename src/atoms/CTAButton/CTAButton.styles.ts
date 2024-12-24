import { theme } from '@/constants/theme';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

type CTAButtonStyledProps = {
  buttontype?: 'standalone' | 'insideAction';
};

export const CTAButtonStyled = styled(Button)<CTAButtonStyledProps>(({ buttontype = 'insideAction' }) => ({
  width: '80%',
  boxShadow: 'none',
  textTransform: 'none',
  borderRadius: theme.cardBorderRadius,
  fontWeight: 'bold',
  backgroundColor: buttontype === 'standalone' ? `${theme.colors.mainColor} !important` : `white !important`,
  color: buttontype === 'standalone' ? theme.colors.textOnMainColor : 'black',

  ...(buttontype === 'standalone' && {
    height: theme.sizes.standaloneButtonHeight,
    margin: '0 auto',

    display: 'block',
  }),

  '&:hover': {
    border: '1px solid',
    backgroundColor: `${theme.colors.textOnMainColor} !important`,
    borderColor: theme.colors.secondaryColor,
    color: theme.colors.textOnSecondaryColor,
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: `${theme.colors.secondaryColor} !important`,
    borderColor: theme.colors.secondaryColor,
    color: theme.colors.textOnSecondaryColor,
  },
}));
