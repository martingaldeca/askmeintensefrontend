'use client';
import { LoginOrRegisterLandingContainer } from '@/components';
import { BackgroundImage } from '@/atoms';

export default function LoginOrRegisterPage() {
  return (
    <BackgroundImage image="login_or_register">
      <LoginOrRegisterLandingContainer />
    </BackgroundImage>
  );
}
