import GalleryColumn from '@/components/gallery-column';
import contentfulClient from '@/lib/contentful';
import { AlbumSkeleton } from '@/types/contentful';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const entries = await contentfulClient.withoutUnresolvableLinks.getEntries<AlbumSkeleton>({ content_type: 'album' });

  return entries.items.map((album) => ({
    slug: album.fields.slug,
  }));
}

export default async function Album({ params }: { params: { slug: string }}) {
  const { slug } = params;

  const response = await contentfulClient.withoutUnresolvableLinks.getEntries<AlbumSkeleton>({
    content_type: 'album',
    'fields.slug[in]': [slug],
  });

  if (response.items.length === 0) {
    notFound();
  }

  const album = response.items[0];
  const numOfImages = album.fields.images.length;

  const breakpoint1 = Math.ceil(numOfImages / 3);
  const breakpoint2 = Math.ceil((numOfImages / 3) * 2);

  return (
    <main className="mx-5 md:w-[47rem] lg:w-[59rem] xl:w-[77rem] md:mx-auto">
      <Link className="block mt-3 mb-1 hover:underline" href="/gallery">&lt; Back to Gallery</Link>
      <h1 className="text-4xl font-bold">{album.fields.title}</h1>
      <div className="my-5 md:gap-10 grid grid-cols-3">
        <GalleryColumn
          images={album.fields.images.slice(0, breakpoint1)}
        />
        <GalleryColumn
          images={album.fields.images.slice(breakpoint1, breakpoint2)}
        />
        <GalleryColumn
          images={album.fields.images.slice(breakpoint2)}
        />
      </div>
    </main>
  );
}
