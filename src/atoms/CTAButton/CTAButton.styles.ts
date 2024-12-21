import { theme } from '@/constants/theme';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const CTAButtonStyled = styled(Button)({
  width: '80%',
  boxShadow: 'none',
  textTransform: 'none',
  borderRadius: theme.cardBorderRadius,
  padding: '10px 12px',
  fontWeight: 'bold',
  height: '45px',
  backgroundColor: `white !important`,
  color: 'black',
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
});
