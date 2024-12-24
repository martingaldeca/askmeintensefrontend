import { styled } from "@mui/system";
import { theme } from "@/constants/theme";
import Button from "@mui/material/Button";

export const ListSelectorStyled = styled('div')({
})

export const ListSelectorButtonStyled = styled(Button)({
  backgroundColor: theme.colors.mainButtonColor,
  color: theme.colors.mainButtonTextColor,
  border: `1px solid ${theme.colors.mainButtonTextColor}`,
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
  borderRadius: theme.cardBorderRadius,
});