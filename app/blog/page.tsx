import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  BLOCKS, INLINES, Node,
} from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contentfulClient from '@/lib/contentful';
import { BlogPostSkeleton } from '@/types/contentful';
import BlogImage from '@/components/blog-image';
import PageTitle from '@/components/page-title';

export const metadata: Metadata = {
  title: 'Blog',
};

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => (
      <BlogImage
        url={`https://${node.data.target.fields.file.url}`}
        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
        description={node.data.target.fields.description}
        className=""
      />
    ),
    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
      <Link
        className="text-red-600 underline hover:text-red-400"
        href={node.data.uri}
      >
        {children}
      </Link>
    ),
  },
};

export default async function Blog() {
  const entries = await contentfulClient.withoutUnresolvableLinks.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-fields.date'],
  });

  const blogPosts = entries.items;

  return (
    <>
      <PageTitle imageSrc="/blog-image.webp" title="BLOG" imageAlt="Team photo" />
      <div className="container mx-auto grid grid-cols-4 gap-x-10 px-5">
        <main className="order-last lg:order-none col-span-4 lg:col-span-3">
          {blogPosts.slice(0, 2).map((blogPost) => (
            <div className="rounded-3xl overflow-hidden mt-5" key={blogPost.fields.slug} id={blogPost.fields.slug}>
              <div className="bg-gray-500 flex pl-1 pr-4 py-4 items-center">
                {blogPost.fields.author?.fields.profilePicture && (
                  <BlogImage
                    url={`https://${blogPost.fields.author.fields.profilePicture.fields.file!.url}`}
                    description={`${blogPost.fields.author.fields.name}'s profile picture`}
                    className="rounded-full hidden sm:block"
                    width={86}
                    height={86}
                  />
                )}
                <div className="grow px-4">
                  <h2 className="text-3xl sm:text-5xl font-bold mb-2">
                    {blogPost.fields.title}&nbsp;
                    <span className="text-lg font-normal">({blogPost.fields.subteam?.fields.name})</span>
                  </h2>
                  <h3 className="text-lg italic">
                    By: {blogPost.fields.author?.fields.name}
                  </h3>
                  <h3 className="text-lg italic block sm:hidden">
                    {new Date(blogPost.fields.date).toDateString()}
                  </h3>
                </div>
                <div className="font-bold text-2xl sm:block hidden">{new Date(blogPost.fields.date).toDateString()}</div>
              </div>
              <div className="bg-black blog-post p-4">
                {documentToReactComponents(blogPost.fields.content, renderOptions)}
              </div>
              <div className="bg-black italic p-4">
                {blogPost.fields.author?.fields.name},&nbsp;
                {new Date(blogPost.fields.date).toLocaleDateString('en-CA')},&nbsp;
                {new Date(blogPost.fields.date).toLocaleTimeString('en-CA')},&nbsp;
                {blogPost.fields.subteam?.fields.name}
              </div>
            </div>
          ))}
        </main>
        <div className="col-span-4 lg:col-span-1 bg-black mt-5 rounded-3xl p-4 self-start pb-10">
          <h2 className="text-3xl font-bold">Other Blog Posts</h2>
          <div className="flex flex-wrap gap-5 lg:block">
            {blogPosts.slice(2).map((blogPost) => (
              <div className="mt-5 w-full sm:w-2/5 lg:w-full" key={blogPost.fields.slug}>
                <Link href={`/blog/${blogPost.fields.slug}`}>
                  <h2 className="text-2xl font-bold hover:underline">{blogPost.fields.title}</h2>
                </Link>
                <p className="italic">
                  {blogPost.fields.author?.fields.name},&nbsp;
                  {new Date(blogPost.fields.date).toDateString()}
                </p>
              </div>
            ))}
          </div>
          {blogPosts.length <= 2 && <p className="italic mt-2">No other blog posts yet...</p>}
        </div>
      </div>
    </>
  );
}
