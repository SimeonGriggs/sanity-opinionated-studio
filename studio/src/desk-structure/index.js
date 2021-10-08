import S from '@sanity/desk-tool/structure-builder'
import Iframe from 'sanity-plugin-iframe-pane'

import resolveProductionUrl from '../helpers/resolveProductionUrl'

export const getDefaultDocumentNode = ({schemaType}) => {
  if (schemaType === `article`) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => resolveProductionUrl(doc),
        })
        .title('Preview'),
    ])
  }

  return S.document()
}

const items = [
  S.documentTypeListItem('article').title('Articles'),
  S.documentTypeListItem('author').title('Authors'),
  // ...S.documentTypeListItems().filter((listItem) => !['article'].includes(listItem.getId())),
]

export default () => {
  return S.list().title('Content').items(items)
}
