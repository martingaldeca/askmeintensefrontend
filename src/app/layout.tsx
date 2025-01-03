import './globals.css';
import type { Metadata } from 'next';
import StoreProvider from '@/providers/StoreProvider';
import { RedirectProvider } from '@/providers/RedirectProvider';
import ToastProvider from '@/providers/ToastProvider';
import BackProvider from '@/providers/BackProvider';
import ScreenOrientationProvider from '@/providers/ScreenOrientationProvider';
import SessionProvider from '@/providers/SessionProvider';
import { GeneralBottomNavigation } from '@/components';
import CustomStylesProvider from '@/providers/CustomStylesProvider';

export const metadata: Metadata = {
  title: 'AskMeIntense',
  description: 'Just if you need to know someone better',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <CustomStylesProvider>
          <ScreenOrientationProvider>
            <SessionProvider>
              <StoreProvider>
                <RedirectProvider>
                  <BackProvider>
                    <ToastProvider>
                      {children}
                      <GeneralBottomNavigation />
                    </ToastProvider>
                  </BackProvider>
                </RedirectProvider>
              </StoreProvider>
            </SessionProvider>
          </ScreenOrientationProvider>
        </CustomStylesProvider>
      </body>
    </html>
  );
}
