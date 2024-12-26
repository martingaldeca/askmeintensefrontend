import './globals.css';
import type { Metadata } from 'next';
import StoreProvider from '@/providers/StoreProvider';
import { RedirectProvider } from '@/providers/RedirectProvider';
import ToastProvider from '@/providers/ToastProvider';
import BackProvider from '@/providers/BackProvider';
import ScreenOrientationProvider from '@/providers/ScreenOrientationProvider';
import SessionProvider from '@/providers/SessionProvider';

export const metadata: Metadata = {
  title: 'AskMeIntense',
  description: 'Just if you need to know someone better',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <ScreenOrientationProvider>
          <SessionProvider>
            <StoreProvider>
              <RedirectProvider>
                <BackProvider>
                  <ToastProvider>{children}</ToastProvider>
                </BackProvider>
              </RedirectProvider>
            </StoreProvider>
          </SessionProvider>
        </ScreenOrientationProvider>
      </body>
    </html>
  );
}
