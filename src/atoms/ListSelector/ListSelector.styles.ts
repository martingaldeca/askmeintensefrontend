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
  backgroundColor: theme.colors.listSelectorColor,
  color: theme.colors.listSelectorTextColor,
  border: `1px solid ${theme.colors.listSelectorBorderColor}`,
  '&:hover': {
    backgroundColor: theme.colors.hoverColor,
  },
  borderRadius: theme.cardBorderRadius,
});

type MenuItemStyledProps = {
  odd?: boolean;
  bold?: boolean;
};

export const MenuItemStyled = styled(MenuItem, {
  shouldForwardProp: prop => prop !== 'odd' && prop !== 'bold',
})<MenuItemStyledProps>(({ odd, bold }) => ({
  backgroundColor: odd ? theme.colors.oddRowColor : theme.colors.evenRowColor,
  width: '100%',
  fontWeight: bold ? 'bold' : 'normal',
}));
