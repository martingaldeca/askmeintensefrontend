import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { theme } from '@/constants/theme';

export const QuestionDetailStyled = styled(Box)({
  width: '100%',
  maxWidth: theme.sizes.maxWidth,
  margin: '0 auto',
  padding: theme.sizes.bigPadding,
});
