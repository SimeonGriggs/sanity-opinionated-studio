import {FiLink2} from 'react-icons/fi'

export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  icon: FiLink2,
  fields: [{name: 'link', type: 'link'}],
  preview: {
    select: {
      title: 'link.text',
      url: 'link.link',
      ref: 'link.reference.slug.current',
    },
    prepare({title, url, ref}) {
      return {
        title,
        subtitle: ref ?? url,
        media: FiLink2,
      }
    },
  },
}
