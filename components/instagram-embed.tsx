'use client';

import { useEffect } from 'react';

type InstagramEmbedProps = {
  embedHtml: string
}

export default function InstagramEmbed({ embedHtml }: InstagramEmbedProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'instagram-embed';
    script.src = '//www.instagram.com/embed.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      script.remove();

      // @ts-ignore
      if (window.instgrm) delete window.instgrm;
    };
  });

  return <div dangerouslySetInnerHTML={{ __html: embedHtml }}></div>;
}
