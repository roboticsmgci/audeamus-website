import contentfulClient from '@/lib/contentful';
import { AuthorSkeleton, BlogPostSkeleton } from '@/types/contentful';
import type { Entry } from 'contentful';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const revalidate = 60;

export default async function BlogPost({ params }: { params: { slug: string }}) {
  const { slug } = params;

  const response = await contentfulClient.getEntries<BlogPostSkeleton>({ content_type: 'blogPost', 'fields.slug[in]': [slug] });

  if (response.items.length === 0) {
    notFound();
  }

  const blogPost = response.items[0];

  return (
    <div className="container mt-24 mx-auto text-gray-300">
      <h1>{blogPost.fields.title}</h1>
      <p>{(blogPost.fields.author as Entry<AuthorSkeleton>).fields.name as string}</p>
      <div>{documentToReactComponents(blogPost.fields.content)}</div>
    </div>
  );
}
