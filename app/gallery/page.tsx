import contentfulClient from '@/lib/contentful';
import { AlbumSkeleton } from '@/types/contentful';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../home.module.css';

export default async function Gallery() {
  const entries = await contentfulClient.withoutUnresolvableLinks.getEntries<AlbumSkeleton>({
    content_type: 'album',
    order: ['-sys.createdAt'],
  });

  return (
    <>
      <div className="font-glacialindifferencebold w-full h-20 overflow-hidden flex flex-col items-center justify-center relative">
        <Image src="/flex.png" fill className="object-cover" alt="Farooq flexing" priority />
        <div className="w-full h-full flex items-center backdrop-blur-sm">
          <h1 className={classNames('text-5xl font-bold mb-2 ml-4', styles.redShadow)}>Gallery</h1>
        </div>
      </div>
      <main className="flex flex-wrap justify-center gap-10 p-5 sm:p-10">
        {entries.items.map((album) => (
          <Link href={`/gallery/${album.fields.slug}`} key={album.fields.slug} className="relative w-60 sm:w-80 group hover:brightness-90 transition">
            <div className="w-52 h-52 sm:w-72 sm:h-72 relative">
              {album.fields.images.length > 0
                && <Image src={`https:${album.fields.images[0]!.fields.file!.url}`} fill className="object-cover" alt="Cover image" sizes="(max-width: 639px) 13rem, 18rem" />}
            </div>
            <div className="w-52 h-52 sm:w-72 sm:h-72 absolute -z-10 top-12 left-8">
              {album.fields.images.length > 1
                && <Image src={`https:${album.fields.images[1]!.fields.file!.url}`} fill className="object-cover" alt="Cover image" sizes="(max-width: 639px) 13rem, 18rem" />}
            </div>
            <h2 className="mt-16 text-3xl text-center font-bold w-full group-hover:underline">{album.fields.title}</h2>
          </Link>
        ))}
      </main>
    </>
  );
}
