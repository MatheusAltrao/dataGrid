import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DataGrid',
  description: ' DataGrid',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body className={inter.className}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
