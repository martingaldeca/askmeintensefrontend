'use client';
import { Typography } from '@mui/material';
import { CTAButton } from '@/atoms';
import {
  ProfileHeaderEditProfileBoxStyled,
  ProfileHeaderStyled,
} from '@/components/ProfileHeader/ProfileHeader.styles';
import { toast } from 'react-toastify';

export type ProfileHeaderProps = {
  fullName?: string;
  email?: string;
};

const ProfileHeader = (props: ProfileHeaderProps) => {
  const handleButton = () => {
    console.log('Sign up button pressed');
    toast.error(`Not yet available. Sorry!`, {
      toastId: 'not-available',
    });
  };
  return (
    <ProfileHeaderStyled>
      <Typography>{props.fullName}</Typography>
      <Typography variant="body2" color="text.secondary">
        {props.email}
      </Typography>
      <ProfileHeaderEditProfileBoxStyled>
        <CTAButton text="Editar perfil" centered={false} size="small" onClick={handleButton} />
      </ProfileHeaderEditProfileBoxStyled>
    </ProfileHeaderStyled>
  );
};

export default ProfileHeader;
