import { styled } from '@mui/system';
import { theme } from '@/constants/theme';

type BackgroundImageStyledProps = {
  image: 'login' | 'login_or_register' | 'register' | 'question_detail' | 'profile';
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
  margin: 0,
  padding: 0,
  zIndex: -1,
}));
