import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { BLOCKS, Node } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import contentfulClient from '@/lib/contentful';
import { BlogPostSkeleton } from '@/types/contentful';
import styles from '../home.module.css';

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

export default async function Blog() {
  const entries = await contentfulClient.withoutUnresolvableLinks.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-fields.date'],
  });

  const blogPosts = entries.items;

  return (
    <>
      <div className="font-glacialindifferencebold px-2 w-full h-60 overflow-hidden bg-[url('/blog-image.webp')] bg-cover bg-center flex flex-col items-center justify-center">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className={classNames('text-center align-middle text-6xl sm:text-8xl font-bold mb-2', styles.redShadow)}>BLOG</h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-x-10 px-5">
        <main className="order-last lg:order-none col-span-4 lg:col-span-3">
          {blogPosts.slice(0, 2).map((blogPost) => (
            <div className="rounded-3xl overflow-hidden mt-5" key={blogPost.fields.slug} id={blogPost.fields.slug}>
              <div className="bg-gray-500 flex pl-1 pr-4 py-4 items-center">
                <Image src="/logo-black-bg.png" alt="test" className="rounded-full hidden sm:block" width={86} height={86} />
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
        </div>
      </div>
    </>
  );
}
