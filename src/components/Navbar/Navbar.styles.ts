import { styled } from '@mui/system';
import { theme } from '@/constants/theme';
import AppBar from '@mui/material/AppBar';

export const NavbarStyled = styled(AppBar)({
  backgroundColor: `${theme.colors.mainColor} !important`,
  border: `1px solid ${theme.colors.borderColor}`,
});
