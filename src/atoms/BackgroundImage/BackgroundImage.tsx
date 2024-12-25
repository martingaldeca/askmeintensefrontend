"use client";

import React from "react";
import { BackgroundImageStyled } from "./BackgroundImage.styles";

export type BackgroundImageProps = {
  image: "login" | "register";
}

const BackgroundImage = (props: BackgroundImageProps) => {
  return (
    <BackgroundImageStyled image={props.image}/>
  );
}
export default BackgroundImage;