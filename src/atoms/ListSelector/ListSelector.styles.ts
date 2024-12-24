import { styled } from '@mui/system';
import { theme } from '@/constants/theme';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

export const ListSelectorStyled = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const ListSelectorButtonStyled = styled(Button)({
  width: '80%',
  backgroundColor: theme.colors.mainButtonColor,
  color: theme.colors.mainButtonTextColor,
  border: `1px solid ${theme.colors.mainButtonTextColor}`,
  '&:hover': {
    backgroundColor: theme.colors.hoverColor,
  },
  borderRadius: theme.cardBorderRadius,
});

type MenuItemStyledProps = {
  odd?: boolean;
}

export const MenuItemStyled = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== 'odd',
})<MenuItemStyledProps>(({ odd }) => ({
  backgroundColor: odd ? theme.colors.oddRowColor : theme.colors.evenRowColor,
  width: '100%',
}));
