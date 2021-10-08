import {FiUser} from 'react-icons/fi'

export default {
  name: 'author',
  title: 'Author',
  icon: FiUser,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
      // subtitle: 'subtitle',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: `${title}`,
        // subtitle: `${subtitle}`,
        media,
      }
    },
  },
}
