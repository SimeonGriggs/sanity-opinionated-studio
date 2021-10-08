import {PackageIcon} from '@sanity/icons'

export default {
  name: 'article',
  title: 'Article',
  icon: PackageIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {type: 'seo', name: 'seo'},
  ],
}
