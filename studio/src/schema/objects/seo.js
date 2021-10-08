export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'string',
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
    },
  ],
}
