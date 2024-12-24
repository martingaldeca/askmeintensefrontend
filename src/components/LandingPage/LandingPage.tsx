'use client';
import { ActionTarget } from '@/components';
import { LandingPageStyled } from './LandingPage.styles';
import { PATHS } from '@/constants/paths';

const LandingPage = () => {
  return (
    <LandingPageStyled>
      <ActionTarget image="main_play" buttonText="Play" redirectTo={PATHS.PREGAME} />
    </LandingPageStyled>
  );
};

export default LandingPage;
