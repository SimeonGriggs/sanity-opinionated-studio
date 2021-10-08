import PropTypes from 'prop-types'
import React, {useMemo} from 'react'
import {getFile} from '@sanity/asset-utils'
import {config} from '../lib/config'
import Button from './Button'

export default function SanityFile({file, children}) {
  const url = useMemo(() => getFile(file, config)?.asset?.url, [])

  return url ? (
    <Button className="mx-auto" href={url}>
      {children ?? 'Download'}
    </Button>
  ) : null
}

SanityFile.propTypes = {
  children: PropTypes.string,
  file: PropTypes.object.isRequired,
}

SanityFile.defaultProps = {
  children: ``,
}
