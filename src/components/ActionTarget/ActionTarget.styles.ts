import { Card } from '@mui/material';
import { styled } from '@mui/system';
import { theme } from '@/constants/theme';

type ActionTargetStyledProps = {
  image: string;
  size?: 'big' | 'small';
};

export const ActionTargetStyled = styled(Card)<ActionTargetStyledProps>(({ image, size = 'big' }) => ({
  margin: 'auto',
  marginTop: '10%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'right',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: '20px',
  color: 'black',
  width: size === 'big' ? '80%' : '40%',
  height: size === 'big' ? '40vh' : '20vh',
  overflow: 'hidden',
  borderRadius: theme.cardBorderRadius,
}));
