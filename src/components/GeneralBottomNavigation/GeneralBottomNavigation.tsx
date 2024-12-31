'use client';
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { GeneralBottomNavigationStyled } from '@/components/GeneralBottomNavigation/GeneralBottomNavigation.styles';
import { usePathname } from 'next/navigation';
import { PATHS, PATHS_WITHOUT_NAVBAR } from '@/constants/paths';
import { useSession } from '@/providers/SessionProvider';

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
        break;
      case 1:
        toast.error('Not yet available. Sorry!', {
          toastId: 'not-available',
        });
        break;
      case 2:
        if (user?.access) {
          router.push(PATHS.PROFILE);
        } else {
          router.push(PATHS.LOGIN_OR_REGISTER);
        }
        break;
      default:
        break;
    }
  };

  return (
    <GeneralBottomNavigationStyled>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction label="Jugar" icon={<QuestionMarkIcon />} />
        <BottomNavigationAction label="Favoritas" icon={<FavoriteIcon />} />
        <BottomNavigationAction label={loginOrProfileText} icon={loginOrProfileIcon} />
      </BottomNavigation>
    </GeneralBottomNavigationStyled>
  );
};

export default GeneralBottomNavigation;
