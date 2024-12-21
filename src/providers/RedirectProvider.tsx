'use client';
import { type PropsWithChildren } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { PATHS } from '@/constants/paths';

export const RedirectProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {

    // If not valid path we go to /
    if (!Object.values(PATHS).includes(pathname as PATHS)) {
      return router.push(PATHS.HOME);
    }

    return;
  }, [router, pathname]);

  return <>{children}</>;
};
