'use client';

import Image from 'next/image';

type BlogImageProps = {
  url: string;
  height: number;
  width: number;
  description: string;
  className: string;
}

export default function BlogImage({
  url, height, width, description, className,
}: BlogImageProps) {
  return (
    <Image
      loader={() => url}
      src={url}
      height={height}
      width={width}
      alt={description}
      className={className}
    />
  );
}
