import { styled } from '@mui/material/styles';
import { Accordion, Typography, Box } from '@mui/material';
import { theme } from '@/constants/theme';

export const AccordionStyled = styled(Accordion)(() => ({
  marginBottom: theme.sizes.smallMargin,
}));

export const QuestionTitleTypographyStyled = styled(Typography)(() => ({
  whiteSpace: 'normal',
}));

export const ExampleBoxStyled = styled(Box)(() => ({
  marginBottom: theme.sizes.smallMargin,
}));

export const CategoryLevelBoxStyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.sizes.smallMargin,
}));

export const ActionContainerStyled = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  alignItems: 'center',
  gap: theme.sizes.smallMargin,
}));

export const ChipContainerStyled = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.sizes.smallMargin,
  flex: 1,
}));
