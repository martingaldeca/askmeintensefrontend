import { styled } from '@mui/system';
import { theme } from '@/constants/theme';
import { Box, Typography } from '@mui/material';

export const QuestionContainerStyled = styled(Box)({
  marginBottom: theme.sizes.mediumMargin,
});

export const QuestionContainerTitleStyled = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: theme.sizes.smallMargin,
  textAlign: 'center',
  paddingTop: theme.sizes.smallPadding,
});

export const QuestionTextContainerStyled = styled(Box)({
  border: `1px solid ${theme.colors.borderColor}`,
  borderRadius: theme.cardBorderRadius,
  padding: theme.sizes.mediumPadding,
});
