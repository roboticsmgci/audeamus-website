'use client';

import Image from 'next/image';

type BlogImageProps = {
  url: string;
  height: number;
  width: number;
  description: string;
}

export default function BlogImage({
  url, height, width, description,
}: BlogImageProps) {
  return (
    <Image
      loader={() => url}
      src={url}
      height={height}
      width={width}
      alt={description}
    />
  );
}
