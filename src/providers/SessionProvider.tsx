'use client';

import { ReactNode, useEffect, useState, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/constants/paths';
import { OpenAPI, TokenObtainPair } from '@/app/lib/client';

interface SessionProviderProps {
  children: ReactNode;
}

type SessionContextType = {
  user: TokenObtainPair | null;
  setUser: (user: TokenObtainPair | null) => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used in a SessionProvider');
  }
  return context;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUserState] = useState<TokenObtainPair | null>(null);
  const router = useRouter();

  const setUser = (user: TokenObtainPair | null) => {
    setUserState(user);
    if (typeof window !== 'undefined') {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        OpenAPI.TOKEN = user.access;
      } else {
        localStorage.removeItem('user');
        OpenAPI.TOKEN = undefined;
      }
    }
  };

  const logout = () => {
    setUser(null);
    router.push(PATHS.HOME);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser) as TokenObtainPair;
        setUser(parsedUser);
      }
    }
  }, []);

  return <SessionContext.Provider value={{ user, setUser, logout }}>{children}</SessionContext.Provider>;
}
