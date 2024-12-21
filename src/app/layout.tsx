import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components';
import StoreProvider from '@/providers/StoreProvider';
import { RedirectProvider } from '@/providers/RedirectProvider';
import ToastProvider from '@/providers/ToastProvider';
import BackProvider from '@/providers/BackProvider';

export const metadata: Metadata = {
  title: 'AskMeIntense',
  description: 'Just if you need to know someone better',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <StoreProvider>
          <RedirectProvider>
            <BackProvider>
              <ToastProvider>
                <Navbar />
                {children}
              </ToastProvider>
            </BackProvider>
          </RedirectProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
