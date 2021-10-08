import {FiFileText} from 'react-icons/fi'

export default {
  name: 'pageBuilderContent',
  title: 'Content',
  type: 'object',
  icon: FiFileText,
  fields: [
    {name: 'subtitle', type: 'string'},
    {name: 'title', type: 'string'},
    {name: 'lead', type: 'text', rows: 2},
    {name: 'content', type: 'portableText'},
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title,
        subtitle: 'Content',
        media: FiFileText,
      }
    },
  },
}
