import React from 'react';

type HomeSectionProps = {
  children: React.ReactNode;
  title: string;
}

export default function HomeSection({ children, title }: HomeSectionProps) {
  return (
    <>
      <h2 className="text-lg tracking-widest text-center mb-6">{title}</h2>
      {children}
    </>
  );
}
