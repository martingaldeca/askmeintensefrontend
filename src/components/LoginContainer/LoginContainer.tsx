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
import { TokenObtainPair, TokenService } from '@/app/lib/client';
import { useSession } from '@/providers/SessionProvider';
import { PATHS } from '@/constants/paths';
import { useRouter } from 'next/navigation';

// Importamos dos íconos de MUI, por ejemplo:
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Ejemplo de animación shake (puedes moverlo a un archivo CSS o styled-components)
const shakeAnimation = {
  animation: 'shake 0.3s',
};

export default function LoginContainer() {
  const { setUser } = useSession();
  const router = useRouter();

  // Manejo de estados para errores y shake
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [shakeEmail, setShakeEmail] = useState(false);
  const [shakePassword, setShakePassword] = useState(false);

  // Manejo de la visibilidad de la contraseña
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
    resetErrors(); // Limpiar errores previos

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    // Validar email
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.error('Por favor introduce un correo electrónico válido', {
        toastId: 'email-error',
      });
      setEmailError(true);
      setShakeEmail(true);
      return;
    }

    // Validar password
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
        throw new Error('Error al obtener los tokens de autenticación');
      }
    } catch (error) {
      // Si hay error desde la API, pintar ambos campos
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
  };

  const handleSignUp = () => {
    console.log('Sign up button pressed');
    toast.error(`Not yet available. Sorry!`, {
      toastId: 'not-available',
    });
  };

  return (
    <LoginContainerStyled>
      {/* Agregamos keyframes en línea para la demostración.
          Puedes moverlo a tu global CSS / styled components */}
      <style jsx global>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-5px);
          }
          40% {
            transform: translateX(5px);
          }
          60% {
            transform: translateX(-5px);
          }
          80% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <form onSubmit={handleLogin}>
        <InputContainerStyled>
          <TextField
            name="email"
            label="Email"
            variant="standard"
            fullWidth
            // MUI: activar estilo de error
            error={emailError}
            // Para el shake
            style={shakeEmail ? shakeAnimation : {}}
            onAnimationEnd={() => setShakeEmail(false)} // Para quitar el shake al terminar
          />

          <TextField
            name="password"
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            variant="standard"
            fullWidth
            error={passwordError}
            style={shakePassword ? shakeAnimation : {}}
            onAnimationEnd={() => setShakePassword(false)}
            // Añadimos el ícono para mostrar/ocultar la contraseña
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <ForgotPasswordStyled variant="body2" onClick={handleForgotPassword}>
            ¿Olvidaste la contraseña?
          </ForgotPasswordStyled>
        </InputContainerStyled>

        <CTAButton text="Login" submit={true} />
      </form>

      <CTAButton text="Registrarse" onClick={handleSignUp} primaryButton={false} />
    </LoginContainerStyled>
  );
}
