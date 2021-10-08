/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import Hero from './Hero'

const dynamicBlocks = {
  //   pageBuilderQuote: dynamic(() => import('./Quote')),
  pageBuilderColumns: dynamic(() => import('./Columns')),
  pageBuilderContent: dynamic(() => import('./Content')),
  //   pageBuilderForm: dynamic(() => import('./Form')),
  pageBuilderImage: dynamic(() => import('./Image')),
  // pageBuilderProducts: dynamic(() => import('./Products')),
  //   pageBuilderTeamMembers: dynamic(() => import('./TeamMembers')),
  //   pageBuilderVideo: dynamic(() => import('./Video')),
}

const staticBlocks = {
  pageBuilderHero: (block) => <Hero {...block} />,
}

export default function PageBuilder({blocks}) {
  return blocks
    .map((block) => ({key: block._key, ...block}))
    .map((block) =>
      dynamicBlocks[block._type]
        ? React.createElement(dynamicBlocks[block._type], block)
        : staticBlocks[block._type](block)
    )
}

PageBuilder.propTypes = {
  blocks: PropTypes.array,
}
