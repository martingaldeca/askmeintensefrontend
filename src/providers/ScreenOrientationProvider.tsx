'use client';

import React, { useEffect, createContext, ReactNode } from 'react';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { Capacitor } from '@capacitor/core';

const ScreenOrientationContext = createContext(null);

interface ScreenOrientationProviderProps {
  children: ReactNode;
}

const ScreenOrientationProvider: React.FC<ScreenOrientationProviderProps> = ({ children }) => {
  useEffect(() => {
    const lockOrientation = async () => {
      if (Capacitor.getPlatform() !== 'web') {
        // Only run this logic on native platforms (Android/iOS)
        try {
          await ScreenOrientation.lock({ orientation: 'portrait' });
          console.log('Orientation locked to portrait');
        } catch (err) {
          console.error('Error locking orientation:', err);
        }
      } else {
        console.log('ScreenOrientation API is not available in the browser.');
      }
    };

    lockOrientation();

    return () => {
      if (Capacitor.getPlatform() !== 'web') {
        ScreenOrientation.unlock()
          .then(() => console.log('Orientation unlocked'))
          .catch(err => console.error('Error unlocking orientation:', err));
      }
    };
  }, []);

  return <ScreenOrientationContext.Provider value={null}>{children}</ScreenOrientationContext.Provider>;
};

export default ScreenOrientationProvider;
