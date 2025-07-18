import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechFlow - Revolutionary Development Platform',
  description: 'Build, deploy, and scale your applications faster than ever before. Revolutionary platform combining cutting-edge technology with intuitive design.',
  keywords: ['development', 'platform', 'tech', 'deployment', 'scalable', 'applications'],
  authors: [{ name: 'TechFlow Team' }],
  openGraph: {
    title: 'TechFlow - Revolutionary Development Platform',
    description: 'Build, deploy, and scale your applications faster than ever before.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFlow - Revolutionary Development Platform',
    description: 'Build, deploy, and scale your applications faster than ever before.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}