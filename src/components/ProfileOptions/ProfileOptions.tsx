'use client';
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import GavelIcon from '@mui/icons-material/Gavel';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession } from '@/providers/SessionProvider';
import {
  ProfileOptionsCloseSessionTextStyled,
  ProfileOptionsStyled,
} from '@/components/ProfileOptions/ProfileOptions.styles';
import { toast } from 'react-toastify';
import { DataService } from '@/app/lib/client';

const ProfileOptions = () => {
  const { logout } = useSession();
  const handleButton = () => {
    console.log('Sign up button pressed');
    toast.error(`Not yet available. Sorry!`, {
      toastId: 'not-available',
    });
  };
  const handleLogout = () => {
    DataService.dataEventCreate({
      event_type: 'logout',
    }).catch(error => {
      console.error('Error sending page change event:', error);
    });
    logout();
  };

  return (
    <ProfileOptionsStyled>
      <Divider />
      <ListItem onClick={handleButton}>
        <ListItemButton>
          <ListItemIcon>
            <MailIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Notificaciones" />
        </ListItemButton>
      </ListItem>
      <ListItem onClick={handleButton}>
        <ListItemButton>
          <ListItemIcon>
            <LanguageIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Idioma" />
        </ListItemButton>
      </ListItem>
      <ListItem onClick={handleButton}>
        <ListItemButton>
          <ListItemIcon>
            <DarkModeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Modo oscuro/claro" />
        </ListItemButton>
      </ListItem>
      <Divider />

      <ListItem onClick={handleButton}>
        <ListItemButton>
          <ListItemIcon>
            <SupportAgentIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Ayuda y soporte" />
        </ListItemButton>
      </ListItem>

      <ListItem onClick={handleButton}>
        <ListItemButton>
          <ListItemIcon>
            <ContactSupportIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Contacta con nosotros" />
        </ListItemButton>
      </ListItem>

      <ListItem onClick={handleButton}>
        <ListItemButton>
          <ListItemIcon>
            <GavelIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Términos y condiciones" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem onClick={handleLogout}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon color="error" />
          </ListItemIcon>
          <ProfileOptionsCloseSessionTextStyled primary="Cerrar sesion" />
        </ListItemButton>
      </ListItem>
    </ProfileOptionsStyled>
  );
};
export default ProfileOptions;
