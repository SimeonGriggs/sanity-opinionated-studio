/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import PropTypes from 'prop-types'
import React, {useMemo} from 'react'
import {getImageDimensions} from '@sanity/asset-utils'

// eslint-disable-next-line import/no-cycle
import {urlFor} from '../lib/sanity'

function getImageDetails({image, width, height}, configOverrides = {}) {
  if (!image?.asset?._ref) return {}

  if (width && height) {
    return {
      url: urlFor(image, configOverrides).auto('format').width(width).height(height).url(),
      imageWidth: width,
      imageHeight: height,
    }
  }

  const {width: originalWidth, height: originalHeight} = getImageDimensions(image)

  const ratio = width ? width / originalWidth : height / originalHeight
  const imageWidth = width || parseInt(originalWidth * ratio, 10)
  const imageHeight = height || parseInt(originalHeight * ratio, 10)
  const url = urlFor(image, configOverrides)
    .width(imageWidth)
    // .height(imageHeight)
    .auto('format')
    .url()

  return {url, imageWidth, imageHeight}
}

export default function SanityImage(props) {
  const {className, width, height, preload, srcset} = props

  const image = props?.image?._type === 'mainImage' ? props.image.image : props.image
  const alt = props?.image?._type === 'mainImage' ? props.image.alt : props.alt

  const {url, imageWidth, imageHeight} = useMemo(
    () => getImageDetails({image, width, height}),
    [image, width, height]
  )

  /**
   * This is _awful_
   * Direct your "feedback" to Simeon :D
   */
  const srcsetString = srcset
    ? [
        `${url} ${imageWidth}w`,
        `${
          getImageDetails(image, parseInt(width * 0.66, 10), parseInt(height * 0.66, 10)).url
        } ${parseInt(width * 0.66, 10)}w`,
        `${
          getImageDetails(image, parseInt(width * 0.33, 10), parseInt(height * 0.33, 10)).url
        } ${parseInt(width * 0.33, 10)}w`,
      ].join(`, `)
    : ``

  if (!url) return null

  return (
    <>
      {preload && (
        <Head>
          <link rel="preload" as="image" href={url} />
        </Head>
      )}
      <img
        loading={preload ? `eager` : `lazy`}
        className={className || ``}
        alt={alt}
        src={url}
        width={imageWidth}
        height={imageHeight}
        srcSet={srcsetString ?? undefined}
      />
    </>
  )
}

SanityImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  image: PropTypes.object.isRequired,
  preload: PropTypes.bool,
  srcset: PropTypes.bool,
  width: PropTypes.number,
}

SanityImage.defaultProps = {
  height: 0,
  width: 800,
  alt: '',
  className: '',
  preload: false,
  srcset: false,
}
