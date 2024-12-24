import { styled } from '@mui/system';
import { Card } from '@mui/material';
import { theme } from '@/constants/theme';

type CardSelectorStyledProps = {
  image: string;
};
export const CardSelectorStyled = styled(Card)<CardSelectorStyledProps>(({ image }) => ({
  margin: 'auto',
  marginTop: '10%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  width: '80%',
  height: '20vh',
  overflow: 'hidden',
  borderRadius: theme.cardBorderRadius,
}));
