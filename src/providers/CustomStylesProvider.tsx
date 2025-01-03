'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import globalTheme from '@/constants/theme';

interface CustomStylesProviderProps {
  children: ReactNode;
}

const CustomStylesProvider: React.FC<CustomStylesProviderProps> = ({ children }) => {
  return <ThemeProvider theme={globalTheme}>{children}</ThemeProvider>;
};
export default CustomStylesProvider;
