import {FiColumns} from 'react-icons/fi'

export default {
  name: 'pageBuilderColumns',
  title: 'Columns',
  type: 'object',
  icon: FiColumns,
  fields: [
    {name: 'subtitle', type: 'string'},
    {name: 'title', type: 'string'},
    {name: 'description', type: 'text', options: {rows: 2}},
    {
      name: 'columns',
      type: 'array',
      of: [{type: 'column'}],
    },
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare(selection) {
      const {columns} = selection
      const columnsCount = columns ? columns.length : 0
      const columnsSubtitle = columnsCount === 1 ? '1 Column' : `${columnsCount} Columns`
      const columnsTitles = columnsCount ? columns.map((column) => column.title).join(', ') : ''

      return {
        title: columnsTitles,
        subtitle: columnsCount > 0 ? columnsSubtitle : 'Columns',
        media: FiColumns,
      }
    },
  },
}
