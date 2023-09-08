import PageTitle from '@/components/page-title';
import contentfulClient from '@/lib/contentful';
import { AlbumSkeleton } from '@/types/contentful';
import Image from 'next/image';
import Link from 'next/link';

export default async function Gallery() {
  const entries = await contentfulClient.withoutUnresolvableLinks.getEntries<AlbumSkeleton>({
    content_type: 'album',
  });

  return (
    <>
      <PageTitle imageSrc="/flex.png" title="GALLERY" imageAlt="Placeholder image" />
      <main className="flex justify-center gap-10 p-10">
        {entries.items.map((album) => (
          <Link href={`/gallery/${album.fields.slug}`} key={album.fields.slug} className="relative w-80 group hover:brightness-90 transition">
            <div className="w-72 h-72 relative">
              {album.fields.images.length > 0
                && <Image src={`https:${album.fields.images[0]!.fields.file!.url}`} fill className="object-cover" alt="Cover image" />}
            </div>
            <div className="w-72 h-72 absolute -z-10 top-12 left-8">
              {album.fields.images.length > 1
                && <Image src={`https:${album.fields.images[1]!.fields.file!.url}`} fill className="object-cover" alt="Cover image" />}
            </div>
            <h2 className="mt-16 text-3xl text-center font-bold w-full group-hover:underline">{album.fields.title}</h2>
          </Link>
        ))}
      </main>
    </>
  );
}
