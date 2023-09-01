import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Barlow_Semi_Condensed } from 'next/font/google';
import React from 'react';
import classNames from 'classnames';
import Navbar from '@/components/navbar';
import './globals.css';

const barlow = Barlow_Semi_Condensed({ weight: ['400', '700'], subsets: ['latin'], style: ['normal', 'italic'] });

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
      <body className={classNames(barlow.className, 'text-white min-h-screen')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
