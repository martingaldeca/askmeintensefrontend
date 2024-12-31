'use client';
import { ActionTargetStyled } from './ActionTarget.styles';
import { CTAButton } from '@/atoms';
import { PATHS } from '@/constants/paths';
import { useRouter } from 'next/navigation';

export type ActionTargetProps = {
  image: 'main_play';
  size?: 'big' | 'small';
  buttonText: string;
  redirectTo: PATHS;
};

const ActionTarget = (props: ActionTargetProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(props.redirectTo);
  };
  return (
    <ActionTargetStyled
      image={`/img/ActionTargetBackgrounds/${props.image}.png`}
      size={props.size}
      onClick={handleClick}
    >
      <CTAButton text="¡A preguntar!" primaryButton={false} type="insideAction" onClick={handleClick} />
    </ActionTargetStyled>
  );
};

export default ActionTarget;
