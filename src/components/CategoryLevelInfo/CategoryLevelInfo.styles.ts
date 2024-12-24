import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { theme } from "@/constants/theme";

export const CategoryLevelInfoStyled = styled(Box)({
  padding: theme.sizes.mediumPadding,
  display: "flex",
  alignItems: "center",
  gap: theme.sizes.mediumPadding,
  marginBottom: theme.sizes.mediumMargin,
});