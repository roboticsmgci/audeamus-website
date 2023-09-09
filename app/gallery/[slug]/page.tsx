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

export default async function BlogPost({ params }: { params: { slug: string }}) {
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

  return (
    <main className="mx-5 md:w-[47.5rem] lg:w-[62.5rem] xl:w-[74.5rem] md:mx-auto">
      <Link className="block mt-3 mb-1 hover:underline" href="/gallery">&lt; Back to Gallery</Link>
      <h1 className="text-4xl font-bold">{album.fields.title}</h1>
      <div className="my-5 md:gap-5 grid grid-cols-3">
        <GalleryColumn
          images={album.fields.images.slice(0, numOfImages / 3 + 1)}
        />
        <GalleryColumn
          images={album.fields.images.slice(numOfImages / 3 + 1, (numOfImages / 3) * 2 + 1)}
        />
        <GalleryColumn
          images={album.fields.images.slice((numOfImages / 3) * 2 + 1)}
        />
      </div>
    </main>
  );
}
