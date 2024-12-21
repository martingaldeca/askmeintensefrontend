'use client';
import { ActionTargetStyles } from './ActionTarget.styles';
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
    <ActionTargetStyles
      image={`/img/ActionTargetBackgrounds/${props.image}.png`}
      size={props.size}
      onClick={handleClick}
    >
      <CTAButton text="¡A preguntar!" onClick={handleClick} />
    </ActionTargetStyles>
  );
};

export default ActionTarget;
