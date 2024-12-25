'use client';
import { LoginOrRegisterLandingContainer } from '@/components';
import { BackgroundImage } from '@/atoms';

export default function LoginOrRegisterPage() {
  return (
    <div>
      <BackgroundImage image="login">
        <LoginOrRegisterLandingContainer />
      </BackgroundImage>
    </div>
  );
}
