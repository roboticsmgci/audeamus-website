import * as contentful from 'contentful';

export type AuthorSkeleton = {
  contentTypeId: 'author'
  fields: {
    name: contentful.EntryFieldTypes.Text
    profilePicture?: contentful.EntryFieldTypes.AssetLink
  }
}

export type SubteamSkeleton = {
  contentTypeId: 'subteam'
  fields: {
    name: contentful.EntryFieldTypes.Text
  }
}

export type BlogPostSkeleton = {
  contentTypeId: 'blogPost'
  fields: {
    title: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    coverImage: contentful.EntryFieldTypes.AssetLink
    date: contentful.EntryFieldTypes.Date
    slug: contentful.EntryFieldTypes.Text
    author: contentful.EntryFieldTypes.EntryLink<AuthorSkeleton>
    subteam: contentful.EntryFieldTypes.EntryLink<SubteamSkeleton>
  }
}
