'use client';

import React, { FormEvent, useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import {
  ForgotPasswordStyled,
  LoginContainerStyled,
  InputContainerStyled,
} from '@/components/LoginContainer/LoginContainer.styles';
import { CTAButton } from '@/atoms';
import { toast } from 'react-toastify';
import { DataService, TokenObtainPair, TokenService } from '@/app/lib/client';
import { useSession } from '@/providers/SessionProvider';
import { PATHS } from '@/constants/paths';
import { useRouter } from 'next/navigation';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginContainer() {
  const { setUser } = useSession();
  const router = useRouter();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [shakeEmail, setShakeEmail] = useState(false);
  const [shakePassword, setShakePassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const resetErrors = () => {
    setEmailError(false);
    setPasswordError(false);
    setShakeEmail(false);
    setShakePassword(false);
  };

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetErrors();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.error('Por favor introduce un correo electrónico válido', {
        toastId: 'email-error',
      });
      setEmailError(true);
      setShakeEmail(true);
      return;
    }

    if (!password || password.length < 7) {
      toast.error('Por favor introduce una contraseña válida de al menos 7 caracteres', {
        toastId: 'password-error',
      });
      setPasswordError(true);
      setShakePassword(true);
      return;
    }

    try {
      const user: TokenObtainPair = await TokenService.tokenLoginCreate({ email, password });

      if (user.access && user.refresh) {
        setUser({
          email,
          access: user.access,
          refresh: user.refresh,
        });
        toast.success('Inicio de sesión exitoso', {
          toastId: 'login-success',
        });
        router.push(PATHS.HOME);
      } else {
        throw new Error('Auth error getting token');
      }
    } catch (error) {
      setEmailError(true);
      setShakeEmail(true);
      setPasswordError(true);
      setShakePassword(true);
      toast.error(`Error haciendo login: ${error}`, {
        toastId: 'login-error',
      });
    }
  }

  const handleForgotPassword = () => {
    console.log('Forgot password button pressed');
    toast.error(`Not yet available. Sorry!`, {
      toastId: 'not-available',
    });
    DataService.dataEventCreate({
      event_type: 'password_forgot_click',
    }).catch(error => {
      console.error('Error sending page change event:', error);
    });
  };

  const handleSignUp = () => {
    console.log('Sign up button pressed');
    toast.error(`Not yet available. Sorry!`, {
      toastId: 'not-available',
    });
  };

  return (
    <LoginContainerStyled>
      <form onSubmit={handleLogin}>
        <InputContainerStyled>
          <TextField
            name="email"
            label="Email"
            variant="standard"
            fullWidth
            error={emailError}
            className={shakeEmail ? 'shake' : ''}
            onAnimationEnd={() => setShakeEmail(false)}
          />

          <TextField
            name="password"
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            variant="standard"
            fullWidth
            error={passwordError}
            className={shakePassword ? 'shake' : ''}
            onAnimationEnd={() => setShakePassword(false)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <ForgotPasswordStyled variant="body2" onClick={handleForgotPassword}>
            ¿Olvidaste la contraseña?
          </ForgotPasswordStyled>
        </InputContainerStyled>

        <CTAButton text="Login" submit={true} withMargin={true} eventType="complete_login_button_click" />
      </form>

      <CTAButton
        text="Registrarse"
        onClick={handleSignUp}
        primaryButton={false}
        withMargin={true}
        eventType="register_from_login_button_click"
      />
    </LoginContainerStyled>
  );
}
