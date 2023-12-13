import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Social Media',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
