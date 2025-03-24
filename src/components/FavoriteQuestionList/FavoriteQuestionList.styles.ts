import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { theme } from '@/constants/theme';

export const FavoriteQuestionListStyled = styled(Box)({
  marginTop: theme.sizes.mediumMargin,
  height: theme.sizes.verticalSizeLarge,
  overflow: 'auto',
});
