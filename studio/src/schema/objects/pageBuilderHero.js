import {FiType} from 'react-icons/fi'

export default {
  name: 'pageBuilderHero',
  title: 'Hero',
  type: 'object',
  icon: FiType,
  fields: [
    {name: 'title', type: 'string'},
    {name: 'description', type: 'text', rows: 2},
    {
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title,
        subtitle: 'Hero',
        media,
      }
    },
  },
}
