import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

function testHref(href) {
  if (!href || typeof href !== 'string') return {}
  if (href.startsWith('/')) return {path: href}

  const hrefUrl = new URL(href)

  if (!hrefUrl.host.startsWith('candicorp.sanity.build')) {
    return {
      url: hrefUrl.toString(),
    }
  }

  return {
    path: hrefUrl.pathname,
  }
}

// eslint-disable-next-line react/display-name
const Anchor = React.forwardRef(({onClick, href, className, children}, ref) => (
  <a href={href} onClick={onClick || undefined} ref={ref} className={className}>
    {children}
  </a>
))

Anchor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
}

Anchor.defaultProps = {
  className: ``,
  href: ``,
  onClick: undefined,
}

export default function ConditionalLink({href, children, className, onClick}) {
  const {path, url} = testHref(href)
  const {asPath} = useRouter()

  if (url)
    return (
      <a
        onClick={() => onClick}
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )

  if (!path) return null

  return (
    <Link href={path} passHref>
      {onClick ? (
        <Anchor onClick={onClick} className={`${className} ${path === asPath ? `active` : ``}`}>
          {children}
        </Anchor>
      ) : (
        <a className={`${className} ${path === asPath ? `active` : ``}`}>{children}</a>
      )}
    </Link>
  )
}

ConditionalLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

ConditionalLink.defaultProps = {
  className: ``,
  onClick: undefined,
}
