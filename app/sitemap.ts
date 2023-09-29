import contentfulClient from '@/lib/contentful';
import { AlbumSkeleton, BlogPostSkeleton } from '@/types/contentful';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = `https://${process.env.HOSTNAME!}`;

  const blogPostsResponse = await contentfulClient
    .withoutUnresolvableLinks
    .getEntries<BlogPostSkeleton>({
      content_type: 'blogPost',
    });

  const albumsResponse = await contentfulClient
    .withoutUnresolvableLinks
    .getEntries<AlbumSkeleton>({
      content_type: 'album',
    });

  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseURL}/sponsors`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseURL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseURL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...blogPostsResponse.items.map((blogPost) => ({
      url: `${baseURL}/blog/${blogPost.fields.slug}`,
      lastModified: blogPost.sys.updatedAt,
      changeFrequency: 'never' as const,
      priority: 0.4,
    })),
    ...albumsResponse.items.map((album) => ({
      url: `${baseURL}/gallery/${album.fields.slug}`,
      lastModified: album.sys.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ];
}
