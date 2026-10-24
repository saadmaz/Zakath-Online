import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zakath Online Landing',
  description: 'Landing placeholder for Zakath Online'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
