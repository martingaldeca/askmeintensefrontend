import { Chip } from '@mui/material';
import { styled } from '@mui/system';
import { theme } from '@/constants/theme';

type CustomChipStyledProps = {
  primary?: boolean;
};

export const CustomChipStyled = styled(Chip)<CustomChipStyledProps>(({ primary = true }) => ({
  backgroundColor: primary ? theme.colors.mainColor : theme.colors.secondaryColor,
  color: primary ? theme.colors.textOnMainColor : theme.colors.textOnSecondaryColor,
  borderRadius: theme.cardBorderRadius,
  borderColor: primary ? theme.colors.textOnMainColor : theme.colors.textOnSecondaryColor,
  margin: 'auto',
}));
