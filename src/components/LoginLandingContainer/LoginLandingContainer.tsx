'use client';
import { LoginLandingContainerStyled } from './LoginLandingContainer.styles';
import Typography from '@mui/material/Typography';
import { CTAButton } from '@/atoms';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/constants/paths';

const LoginLandingContainer = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push(PATHS.LOGIN);
  };
  const handleRegister = () => {
    router.push(PATHS.REGISTER);
  };
  return (
    <LoginLandingContainerStyled>
      <Typography>¡El juego para conocer de verdad a los demás!</Typography>
      <div>
        <CTAButton
          text="Login"
          primaryButton={false}
          withMargin={true}
          onClick={handleLogin}
          eventType="login_button_click"
        />
        <CTAButton text="Registrarse" withMargin={true} onClick={handleRegister} eventType="register_button_click" />
      </div>
    </LoginLandingContainerStyled>
  );
};
export default LoginLandingContainer;
