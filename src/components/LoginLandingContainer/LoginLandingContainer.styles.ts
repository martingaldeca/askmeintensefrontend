import { styled } from "@mui/system";
import { theme } from "@/constants/theme";

export const LoginLandingContainerStyled = styled('div')({
  marginTop: theme.sizes.verticalSizeFillSmall,
  backgroundColor: theme.colors.mainColor,
  height: theme.sizes.verticalSizeSmall,
  color: '#fff',
  textAlign: 'center',
  padding: theme.sizes.mediumPadding
});
