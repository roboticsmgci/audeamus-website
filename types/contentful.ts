import * as contentful from 'contentful';

export type AuthorSkeleton = {
  contentTypeId: 'author'
  fields: {
    name: contentful.EntryFieldTypes.Text
    profilePicture?: contentful.EntryFieldTypes.AssetLink
  }
}

export type BlogPostSkeleton = {
  contentTypeId: 'blogPost'
  fields: {
    title: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    excerpt?: contentful.EntryFieldTypes.Text
    coverImage: contentful.EntryFieldTypes.AssetLink
    date: contentful.EntryFieldTypes.Date
    slug: contentful.EntryFieldTypes.Text
    author: contentful.EntryFieldTypes.EntryLink<AuthorSkeleton>
  }
}
