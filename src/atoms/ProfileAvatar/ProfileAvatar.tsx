import { ProfileAvatarStyled } from '@/atoms/ProfileAvatar/ProfileAvatar.styles';
import { toast } from 'react-toastify';

export type ProfileAvatarProps = {
  avatar?: string;
};

const ProfileAvatar = (props: ProfileAvatarProps) => {
  const handleButton = () => {
    console.log('Sign up button pressed');
    toast.error(`Not yet available. Sorry!`, {
      toastId: 'not-available',
    });
  };
  return (
    <ProfileAvatarStyled onClick={handleButton} src={`/img/ProfileAvatars/${props.avatar}_avatar.png`} alt="profile" />
  );
};

export default ProfileAvatar;
