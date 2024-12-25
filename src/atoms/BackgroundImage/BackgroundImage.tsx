'use client';

import React, { ReactNode } from 'react';
import { BackgroundImageStyled } from './BackgroundImage.styles';

export type BackgroundImageProps = {
  children: ReactNode;
  image: 'login' | 'register';
};

const BackgroundImage = (props: BackgroundImageProps) => {
  return <BackgroundImageStyled image={props.image}>{props.children}</BackgroundImageStyled>;
};
export default BackgroundImage;
