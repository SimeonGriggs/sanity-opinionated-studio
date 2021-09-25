import S from '@sanity/desk-tool/structure-builder'

export default function listWithIcon(schema, title, icon) {
  return S.listItem().title(title).icon(icon).child(S.documentTypeList(schema))
}
