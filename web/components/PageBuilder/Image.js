import React from 'react'
import PropTypes from 'prop-types'
import {CameraIcon} from '@heroicons/react/solid'

import SanityImage from '../SanityImage'
import ProseableText from '../ProseableText'

export default function Image({subtitle, title, content, image}) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-sky-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            {subtitle && (
              <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">
                {subtitle}
              </h2>
            )}
            {title && (
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h3>
            )}
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                    className="text-sky-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            {image && (
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  {image?.image && (
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <SanityImage
                        alt={image?.alt}
                        className="rounded-lg shadow-lg object-cover object-center"
                        image={image.image}
                        width={1184}
                        height={1376}
                      />
                    </div>
                  )}
                  {image?.caption && (
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-2">{image.caption}</span>
                    </figcaption>
                  )}
                </figure>
              </div>
            )}
          </div>
          <div className="mt-8 lg:mt-0">
            {content?.length > 0 && (
              <div className="mt-5 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <ProseableText blocks={content} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Image.propTypes = {
  content: PropTypes.array,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.shape({
      asset: PropTypes.object,
    }),
  }),
}

Image.defaultProps = {
  content: [],
  subtitle: ``,
  title: ``,
  image: {
    alt: ``,
    caption: ``,
    image: {
      asset: {},
    },
  },
}
