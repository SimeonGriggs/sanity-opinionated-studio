import PropTypes from 'prop-types'
import React, {useMemo} from 'react'
import {FiImage} from 'react-icons/fi'
import imageUrlBuilder from '@sanity/image-url'
import {Box, Flex, Text} from '@sanity/ui'
import sanityClient from 'part:@sanity/base/client'

const client = sanityClient.withConfig({apiVersion: `2021-05-19`})
const builder = imageUrlBuilder(client)

const ImagePreview = ({value}) => {
  const {image, alt} = value

  const src = useMemo(
    () =>
      image?.asset
        ? builder.image(image).dataset(client.clientConfig.dataset).width(600).url()
        : null,
    [image]
  )

  if (!image)
    return (
      <Box padding={2}>
        <Text size={1}>No image selected</Text>
      </Box>
    )

  return (
    <Flex>
      <img style={{width: `100%`, height: `auto`}} src={src} alt={alt} />
    </Flex>
  )
}

ImagePreview.propTypes = {
  value: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
}

export default {
  name: 'mainImage',
  title: 'Image',
  type: 'object',
  icon: FiImage,
  fields: [
    {name: 'image', type: 'image', options: {hotspot: true}},
    {name: 'alt', type: 'string'},
    {name: 'caption', type: 'string'},
  ],
  preview: {
    select: {
      image: 'image',
      alt: 'alt',
    },
    component: ImagePreview,
  },
}
