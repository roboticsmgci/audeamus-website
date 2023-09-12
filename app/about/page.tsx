'use client';

// import type { Metadata } from 'next';
import { useEffect } from 'react';
import PageTitle from '@/components/page-title';

// export const metadata: Metadata = {
//   title: 'About',
//   description: 'Learn more about the MGCI Robotics team. Meet our members, view our achievements,
// and explore the club\'s history.',
// };

export default function About() {
  useEffect(() => {
    const redirect = setTimeout(() => {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 5000);
    return () => clearTimeout(redirect);
  }, []);

  return (
    <div>
      <PageTitle imageSrc="/image-placeholder.gif" title="ABOUT" imageAlt="Placeholder image" />
      <p className="text-3xl text-center mt-5">Page is not implemented yet. Redirecting in 5 seconds...</p>
    </div>
  );
}
