import {FiImage} from 'react-icons/fi'

export default {
  name: 'pageBuilderImage',
  title: 'Text + Image',
  type: 'object',
  icon: FiImage,
  fields: [
    {name: 'subtitle', type: 'string'},
    {name: 'title', type: 'string'},
    {name: 'content', type: 'portableText'},
    {
      name: 'image',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title,
        subtitle: 'Text + Image',
        media: FiImage,
      }
    },
  },
}
