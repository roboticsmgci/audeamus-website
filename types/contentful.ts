import * as contentful from 'contentful';

export type SubteamSkeleton = {
  contentTypeId: 'subteam'
  fields: {
    name: contentful.EntryFieldTypes.Text
  }
}

export type AuthorSkeleton = {
  contentTypeId: 'author'
  fields: {
    name: contentful.EntryFieldTypes.Text
    profilePicture: contentful.EntryFieldTypes.AssetLink
    lead: contentful.EntryFieldTypes.Boolean
    subteams: contentful.EntryFieldTypes.Array<
      contentful.EntryFieldTypes.EntryLink<SubteamSkeleton>>;
  }
}

export type BlogPostSkeleton = {
  contentTypeId: 'blogPost'
  fields: {
    title: contentful.EntryFieldTypes.Text
    content: contentful.EntryFieldTypes.RichText
    date: contentful.EntryFieldTypes.Date
    slug: contentful.EntryFieldTypes.Text
    author: contentful.EntryFieldTypes.EntryLink<AuthorSkeleton>
    subteam: contentful.EntryFieldTypes.EntryLink<SubteamSkeleton>
  }
}

export type AlbumSkeleton = {
  contentTypeId: 'album'
  fields: {
    title: contentful.EntryFieldTypes.Text
    slug: contentful.EntryFieldTypes.Text
    images: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.AssetLink>
  }
}
