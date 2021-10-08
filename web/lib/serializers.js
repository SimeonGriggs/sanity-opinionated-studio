/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import dynamic from 'next/dynamic'

const SanityImage = dynamic(() => import('../components/SanityImage'))
const SanityFile = dynamic(() => import('../components/SanityFile'))
const VideoPlayer = dynamic(() => import('../components/VideoPlayer'))
const Button = dynamic(() => import('../components/Button'))
const Hero = dynamic(() => import('../components/PageBuilder/Hero'))
const Content = dynamic(() => import('../components/PageBuilder/Content'))
const Columns = dynamic(() => import('../components/PageBuilder/Columns'))
const Image = dynamic(() => import('../components/PageBuilder/Image'))

export const serializers = {
  container: ({children}) => children,
  marks: {
    comment: ({children}) => <span>{children}</span>,
    undefined: () => null,
  },
  types: {
    undefined: () => null,
    video: ({node}) => <VideoPlayer url={node?.url} />,
    mainImage: ({node}) =>
      node?.image ? (
        <SanityImage width={800} image={node?.image} alt={node?.alt} className="w-full h-auto" />
      ) : null,
    download: ({node}) => {
      return <SanityFile file={node?.file}>Download</SanityFile>
    },
    button: ({node}) => {
      if (!node?.link) return null

      const {reference, link, text} = node?.link

      return (
        <Button className="mx-auto" href={reference ?? link}>
          {text ?? 'Click'}
        </Button>
      )
    },
    pageBuilderHero: ({node}) => <Hero {...node} />,
    pageBuilderContent: ({node}) => <Content {...node} />,
    pageBuilderColumns: ({node}) => <Columns {...node} />,
    // eslint-disable-next-line jsx-a11y/alt-text
    pageBuilderImage: ({node}) => <Image {...node} />,
  },
}
