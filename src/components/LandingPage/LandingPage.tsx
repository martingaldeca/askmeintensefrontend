'use client';
import { ActionTarget } from "@/components";
import { LandingPageStyles } from "./LandingPage.styles";
import { PATHS } from "@/constants/paths";

const LandingPage = () => {
  return <LandingPageStyles>
    <ActionTarget image="main_play" buttonText="Play" redirectTo={PATHS.PREGAME} />
  </LandingPageStyles>
}

export default LandingPage;