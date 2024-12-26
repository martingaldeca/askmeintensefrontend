import { styled } from '@mui/system';
import { theme } from '@/constants/theme';
import { Typography } from '@mui/material';

export const LoginContainerStyled = styled('div')({
  marginTop: theme.sizes.verticalSizeFillSmall,
  height: theme.sizes.verticalSizeSmall,
  color: theme.colors.mainColor,
  textAlign: 'center',
  padding: theme.sizes.mediumPadding,
});

export const ForgotPasswordStyled = styled(Typography)({
  cursor: 'pointer',
  marginTop: theme.sizes.smallMargin,
  marginLeft: theme.sizes.bigMargin,
  textAlign: 'right',
});

export const InputContainerStyled = styled('div')({
  width: '80%',
  margin: '0 auto',
});
