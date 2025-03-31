'use client';
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { GeneralBottomNavigationStyled } from '@/components/GeneralBottomNavigation/GeneralBottomNavigation.styles';
import { usePathname } from 'next/navigation';
import { PATHS, PATHS_WITHOUT_NAVBAR } from '@/constants/paths';
import { useSession } from '@/providers/SessionProvider';
import { DataService } from "@/app/lib/client";

const GeneralBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useSession();
  
  const shouldHideNav = PATHS_WITHOUT_NAVBAR.includes(pathname as PATHS);
  
  if (shouldHideNav) {
    return <></>;
  }
  
  const loginOrProfileText = user?.access ? 'Perfil' : 'Login';
  const loginOrProfileIcon = user?.access ? <PersonIcon /> : <LoginIcon />;
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push(PATHS.HOME);
        DataService.dataEventCreate({
          event_type: 'navigator_home_click',
        }).catch(error => {
          console.error('Error sending page change event:', error);
        });
        break;
      case 1:
        if (user?.access) {
          router.push(PATHS.FAVORITES);
        } else {
          toast.info('Haz login para ver tus preguntas favoritas', {
            toastId: 'login-required',
          });
        }
        DataService.dataEventCreate({
          event_type: 'navigator_favorites_click',
        }).catch(error => {
          console.error('Error sending page change event:', error);
        });
        break;
      case 2:
        if (user?.access) {
          router.push(PATHS.PROFILE);
          DataService.dataEventCreate({
            event_type: 'navigator_profile_click',
          }).catch(error => {
            console.error('Error sending page change event:', error);
          });
        } else {
          router.push(PATHS.LOGIN_OR_REGISTER);
          DataService.dataEventCreate({
            event_type: 'navigator_login_click',
          }).catch(error => {
            console.error('Error sending page change event:', error);
          });
        }
        break;
      default:
        break;
    }
  };
  
  return (
    <GeneralBottomNavigationStyled>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favoritas" icon={<FavoriteIcon />} />
        <BottomNavigationAction label={loginOrProfileText} icon={loginOrProfileIcon} />
      </BottomNavigation>
    </GeneralBottomNavigationStyled>
  );
};

export default GeneralBottomNavigation;
