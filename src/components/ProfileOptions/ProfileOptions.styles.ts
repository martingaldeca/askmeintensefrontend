import { styled } from '@mui/system';
import { List, ListItemText } from '@mui/material';
import { theme } from '@/constants/theme';

export const ProfileOptionsStyled = styled(List)({
  marginTop: theme.sizes.bigMargin,
});

export const ProfileOptionsCloseSessionTextStyled = styled(ListItemText)({
  color: theme.colors.errorColor,
});
