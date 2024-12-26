'use client';

import { BackgroundImage } from '@/atoms';
import { LoginContainer } from '@/components';

export default function LoginPage() {
  return (
    <BackgroundImage image="login">
      <LoginContainer />
    </BackgroundImage>
  );
}
