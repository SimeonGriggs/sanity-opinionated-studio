import React from 'react'
import PropTypes from 'prop-types'

import ProseableText from '../ProseableText'

export default function Content({subtitle, title, lead, content}) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative">
        {(subtitle || title) && content?.[0]?._type !== 'pageBuilderHero' && (
          <div className="text-lg max-w-prose mx-auto px-4 sm:px-6 lg:px-8 my-8 lg:my-16">
            <h1>
              {subtitle && (
                <span className="block text-base text-center text-pink-600 font-semibold tracking-wide uppercase">
                  {subtitle}
                </span>
              )}
              {title && (
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                  {title}
                </span>
              )}
            </h1>
            {lead && <p className="mt-8 text-xl text-gray-500 leading-8">{lead}</p>}
          </div>
        )}
        {content?.length > 0 && (
          <div className="pb-8 lg:pb-16">
            <ProseableText blocks={content} />
          </div>
        )}
      </div>
    </div>
  )
}

Content.propTypes = {
  content: PropTypes.array,
  lead: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

Content.defaultProps = {
  content: [],
  lead: ``,
  subtitle: ``,
  title: ``,
}
