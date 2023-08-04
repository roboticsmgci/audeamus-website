import contentfulClient from '@/lib/contentful';
import { BlogPostSkeleton } from '@/types/contentful';
import type { Asset, AssetFile } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

export default async function Blog() {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({ content_type: 'blogPost' });

  return (
    <div className="container mx-auto mt-24 px-72">
      <h1 className="text-5xl text-white">Blog</h1>

      <div className="flex flex-wrap justify-between mt-8">
        {entries.items.map((blogPost) => (
          <Link className="group w-full md:w-96 rounded-xl overflow-hidden bg-black text-gray-300" key={blogPost.fields.slug} href={`/blog/${blogPost.fields.slug}`}>
            <div className="relative h-96 overflow-hidden">
              <Image
                alt="Cover image"
                src={`https:${((blogPost.fields.coverImage! as Asset).fields.file! as AssetFile).url}`}
                fill={true}
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="h-40 p-5">
              <p className="text-sm">{new Date(blogPost.fields.date).toDateString()}</p>
              <h2 className="mt-1 text-3xl font-bold">{blogPost.fields.title}</h2>
              <p className="mt-2">{blogPost.fields.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
