import {FiFeather} from 'react-icons/fi'

export default {
  name: 'article',
  title: 'Article',
  icon: FiFeather,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'author'}],
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'portableText',
    },
    {type: 'seo', name: 'seo', title: 'SEO'},
  ],
}
