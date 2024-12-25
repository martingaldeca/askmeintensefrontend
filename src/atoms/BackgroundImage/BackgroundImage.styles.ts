import { styled } from '@mui/system';
import { theme } from '@/constants/theme';

type BackgroundImageStyledProps = {
  image: 'login' | 'register';
};

export const BackgroundImageStyled = styled('div', {
  shouldForwardProp: prop => prop !== 'image',
})<BackgroundImageStyledProps>(props => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: theme.sizes.verticalSizeFull,
  backgroundImage: `url("/img/BackgroundImages/${props.image}.png")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1,
}));
