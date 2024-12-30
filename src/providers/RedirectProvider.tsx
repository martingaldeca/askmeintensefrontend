'use client';
import { type PropsWithChildren } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { PATHS, PATHS_ONLY_ALLOWED_WHEN_LOGIN, PATHS_ONLY_ALLOWED_WHEN_NOT_LOGIN } from '@/constants/paths';
import { useSession } from '@/providers/SessionProvider';

export const RedirectProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useSession();

  useEffect(() => {
    // If not valid path we go to /
    if (!Object.values(PATHS).includes(pathname as PATHS)) {
      return router.push(PATHS.HOME);
    }

    // Check for Paths where you need to be not logged
    if (PATHS_ONLY_ALLOWED_WHEN_NOT_LOGIN.includes(pathname as PATHS) && user?.access) {
      return router.push(PATHS.HOME);
    }

    // Check for Paths where you need to be logged
    if (PATHS_ONLY_ALLOWED_WHEN_LOGIN.includes(pathname as PATHS) && !user?.access) {
      return router.push(PATHS.HOME);
    }

    return;
  }, [router, pathname]);

  return <>{children}</>;
};
