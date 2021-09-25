import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// eslint-disable-next-line import/no-unresolved
import * as Documents from './documents'
// eslint-disable-next-line import/no-unresolved
import * as Objects from './objects'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    ...Object.keys(Documents).map((key) => Documents[key]),
    ...Object.keys(Objects).map((key) => Objects[key]),
  ]),
})
