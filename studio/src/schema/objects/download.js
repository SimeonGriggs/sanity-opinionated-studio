import {FiDownload} from 'react-icons/fi'

export default {
  name: 'download',
  title: 'Download',
  type: 'object',
  icon: FiDownload,
  fields: [{name: 'file', type: 'file'}],
  preview: {
    select: {
      file: 'file.asset.originalFilename',
      url: 'file.asset.url',
    },
    prepare({file, url}) {
      return {
        title: file,
        subtitle: url,
        media: FiDownload,
      }
    },
  },
}
