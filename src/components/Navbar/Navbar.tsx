'use client';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavbarStyled } from '@/components/Navbar/Navbar.styles';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/constants/paths';
import { Logo } from '@/atoms';

const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarStyled position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" className="mr-2">
          <MenuIcon />
        </IconButton>
        <Logo width={25} height={20} />
        <Typography
          onClick={() => router.push(PATHS.HOME)}
          className="flex-grow cursor-pointer pl-2"
          variant="h6"
          component="div"
        >
          {process.env.NEXT_PUBLIC_PROJECT_NAME}
        </Typography>
      </Toolbar>
    </NavbarStyled>
  );
};

export default Navbar;
