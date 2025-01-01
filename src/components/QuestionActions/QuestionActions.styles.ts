import { styled } from '@mui/system';
import { theme } from '@/constants/theme';
import { Box } from '@mui/material';

export const QuestionActionsStyled = styled(Box)({
  display: 'flex',
  gap: 1,
  marginBottom: theme.sizes.mediumMargin,
});
