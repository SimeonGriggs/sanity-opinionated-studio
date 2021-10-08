import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import article from './documents/article'
import author from './documents/author'

// Objects
import pageBuilderColumns from './objects/pageBuilderColumns'
import pageBuilderContent from './objects/pageBuilderContent'
import pageBuilderHero from './objects/pageBuilderHero'
import pageBuilderImage from './objects/pageBuilderImage'
import portableText from './objects/portableText'
import seo from './objects/seo'
import mainImage from './objects/mainImage'
import column from './objects/column'
import button from './objects/button'
import download from './objects/download'
import video from './objects/video'
import link from './objects/link'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    author,

    // Objects
    column,
    pageBuilderColumns,
    pageBuilderContent,
    pageBuilderHero,
    pageBuilderImage,
    portableText,
    mainImage,
    seo,
    button,
    download,
    video,
    link,
  ]),
})
