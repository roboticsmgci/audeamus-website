import Navbar from '@/components/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MGCI Robotics',
  description: 'This is the website for MGCI Robotics, Marc Garneau Collegiate Institute\'s Robotics Club. We are also known as FRC Team 8574.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA">
      <body className={classNames(inter.className, 'bg-gray-800')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
