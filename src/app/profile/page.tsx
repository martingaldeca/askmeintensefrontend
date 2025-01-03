'use client';
import { BackgroundImage, ProfileAvatar } from '@/atoms';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UsersService } from '@/app/lib/client';
import { fetchProfile } from '@/store/slices/profileSlice';
import { toast } from 'react-toastify';
import { useProfile } from '@/hooks';
import { useSession } from '@/providers/SessionProvider';
import { ProfileHeader, ProfileOptions } from '@/components';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { profile } = useProfile();
  const { logout } = useSession();

  useEffect(() => {
    UsersService.meRetrieve()
      .then(data => {
        dispatch(fetchProfile(data));
      })
      .catch(error => {
        console.error('Error during request:', error);
        logout();
        toast.error('Error during request', {
          toastId: 'api-error',
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <BackgroundImage image="profile">
      <ProfileAvatar avatar={profile?.avatar} />
      <ProfileHeader fullName={profile?.first_name + ' ' + profile?.last_name} email={profile?.email} />
      <ProfileOptions />
    </BackgroundImage>
  );
}
