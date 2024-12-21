'use client';
import Image from 'next/image';
import React from 'react';
import { PATHS } from '@/constants/paths';
import { useRouter } from 'next/navigation';

export type LogoProps = {
  className?: string;
  width: number;
  height: number;
};

const Logo = (props: LogoProps) => {
  const router = useRouter();
  
  return (
    <Image
      onClick={() => router.push(PATHS.HOME)}
      src="/img/logo.png"
      width={props.width}
      height={props.height}
      alt="Logo"
      className={'cursor-pointer ' + (props.className ?? '')}
    />
  );
};

export default Logo;
