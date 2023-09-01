'use client';

import { useEffect } from 'react';
import PageTitle from '@/components/page-title';

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 5000);
  }, []);

  return (
    <div>
      <PageTitle imageSrc="/image-placeholder.gif" title="ABOUT" imageAlt="Placeholder image" />
      <p className="text-3xl text-center mt-5">Page is not implemented yet. Redirecting in 5 seconds...</p>
    </div>
  );
}
