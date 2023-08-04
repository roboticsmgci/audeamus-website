import contentfulClient from '@/lib/contentful';
import { BlogPostSkeleton } from '@/types/contentful';
import type { Asset, AssetFile } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 60;

export default async function Blog() {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({ content_type: 'blogPost' });

  const newestBlogPost = entries.items[0];
  const olderBlogPosts = entries.items.slice(1);

  return (
    <div className="container mx-auto mt-24 px-72">
      <h1 className="text-5xl text-white mb-5">Blog</h1>

      <Link href={`/blog/${newestBlogPost.fields.slug}`} className="group block w-full overflow-hidden rounded-xl bg-black text-gray-300">
        <div className="relative h-96 overflow-hidden">
          <Image
            alt="Cover image"
            src={`https:${((newestBlogPost.fields.coverImage! as Asset).fields.file! as AssetFile).url}`}
            fill={true}
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="h-40 p-5">
          <p className="text-sm">{new Date(newestBlogPost.fields.date).toDateString()}</p>
          <h2 className="mt-1 text-3xl font-bold">{newestBlogPost.fields.title}</h2>
          <p className="mt-2">{newestBlogPost.fields.excerpt}</p>
        </div>
      </Link>

      <div className="flex flex-wrap justify-between mt-8">
        {olderBlogPosts.map((blogPost) => (
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
