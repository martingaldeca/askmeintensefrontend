import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { theme } from '@/constants/theme';

export const ProfileHeaderStyled = styled(Box)({
  marginLeft: theme.sizes.mediumMargin,
  marginTop: '30%',
  width: '50%',
});

export const ProfileHeaderEditProfileBoxStyled = styled(Box)({
  marginTop: '5px',
  width: '200px',
});
