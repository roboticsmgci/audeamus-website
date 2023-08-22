import type { Entry } from 'contentful';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Node } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import contentfulClient from '@/lib/contentful';
import { AuthorSkeleton, BlogPostSkeleton } from '@/types/contentful';

export const revalidate = 60;

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => (
      <Image
        src={`https://${node.data.target.fields.file.url}`}
        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
        alt={node.data.target.fields.description}
      />
    ),
  },
};

export async function generateStaticParams() {
  const entries = await contentfulClient.withoutUnresolvableLinks.getEntries<BlogPostSkeleton>({ content_type: 'blogPost' });

  return entries.items.map((blogPost) => ({
    slug: blogPost.fields.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string }}) {
  const { slug } = params;

  const response = await contentfulClient.withoutUnresolvableLinks.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug[in]': [slug],
  });

  if (response.items.length === 0) {
    notFound();
  }

  const blogPost = response.items[0];

  return (
    <div className="container mt-10 mx-auto text-gray-300 px-10 sm:px-28 md:px-48 lg:px-60 xl:px-96">
      <Link className="hover:underline" href="/blog">&lt; Back to Blogs</Link>
      <h1 className="text-5xl font-bold my-2">{blogPost.fields.title}</h1>
      <p className="text-lg">By {(blogPost.fields.author as Entry<AuthorSkeleton>).fields.name as string}</p>
      <div className="blog-post mt-5">{documentToReactComponents(blogPost.fields.content, renderOptions)}</div>
    </div>
  );
}
