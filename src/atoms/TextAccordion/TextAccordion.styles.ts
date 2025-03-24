import Accordion from '@mui/material/Accordion/Accordion';
import { styled } from '@mui/system';
import { theme } from '@/constants/theme';

export const TextAccordionStyled = styled(Accordion)({
  marginBottom: theme.sizes.mediumMargin,
  border: `1px solid ${theme.colors.borderColor}`,
  borderRadius: theme.cardBorderRadius,
  padding: theme.sizes.smallPadding,
  '&::before': {
    display: 'none',
  },
  backgroundColor: theme.colors.mainColorSemiTransparent,
});
