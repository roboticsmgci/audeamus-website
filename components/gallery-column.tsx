import { Asset } from 'contentful';
import Image from 'next/image';

type GalleryColumnProps = {
  images: (Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined)[]
}

export default function GalleryColumn({ images }: GalleryColumnProps) {
  return (
    <div className="col-span-3 md:col-span-1">
      {images.map((image) => (
        <div className="w-full md:w-60 lg:w-80 xl:w-96 mb-5 relative" key={image!.fields.file!.url} style={{
          aspectRatio: image!.fields.file!.details.image!.width
                  / image!.fields.file!.details.image!.height,
        }}>
          <Image
            alt={image!.fields.title || 'Album image'}
            src={`https:${image!.fields.file!.url}`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 15rem, (max-width: 1279px) 20rem, 24rem"
          />
        </div>
      ))}
    </div>
  );
}
