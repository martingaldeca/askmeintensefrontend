import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { theme } from "@/constants/theme";

export const FavoritesFiltersStyled = styled(Box)({
  display: 'flex',
  gap: theme.sizes.smallMargin,
  height: theme.sizes.verticalSizeTiny,
});
