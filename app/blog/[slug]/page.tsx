import type { Entry } from 'contentful';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Node } from '@contentful/rich-text-types';
import Image from 'next/image';
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

export default async function BlogPost({ params }: { params: { slug: string }}) {
  const { slug } = params;

  const response = await contentfulClient.getEntries<BlogPostSkeleton>({ content_type: 'blogPost', 'fields.slug[in]': [slug] });

  if (response.items.length === 0) {
    notFound();
  }

  const blogPost = response.items[0];

  return (
    <div className="container mt-24 mx-auto text-gray-300 px-10 sm:px-28 md:px-48 lg:px-60 xl:px-96">
      <h1 className="text-2xl">{blogPost.fields.title}</h1>
      <p>By {(blogPost.fields.author as Entry<AuthorSkeleton>).fields.name as string}</p>
      <div className="blog-post mt-10">{documentToReactComponents(blogPost.fields.content, renderOptions)}</div>
    </div>
  );
}
