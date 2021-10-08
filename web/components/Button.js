import React from 'react'
import PropTypes from 'prop-types'

import ConditionalLink from './ConditionalLink'

const commonClasses = `flex items-center justify-center text-xs font-bold rounded-full transform hover:scale-105 transition duration-100 px-8 py-3 md:py-4 md:text-lg md:px-10 leading-none text-base font-medium rounded-md border`
const buttonClasses = `shadow border-transparent text-white bg-pink-600 hover:bg-pink-700`
const ghostClasses = `border-pink-500 bg-white text-white bg-pink-50 hover:bg-pink-100`

export default function Button({
  children,
  onClick,
  className,
  href,
  disabled,
  target,
  type,
  ghost,
}) {
  const classes = [commonClasses, ghost ? ghostClasses : buttonClasses, className || '']
    .filter((p) => p)
    .join(' ')
    .trim()

  if (type === 'submit' || type === 'button') {
    return (
      <button
        onClick={onClick ? onClick : null}
        disabled={disabled}
        className={classes}
        type={type === 'submit' ? `submit` : `button`}
      >
        {children}
      </button>
    )
  }

  // Open in new window?
  const attributes = {}
  if (target === '_blank') {
    attributes.target = '_blank'
    attributes.rel = 'noopener'
  }

  if (href) {
    return (
      <ConditionalLink {...attributes} className={classes} href={href}>
        {children}
      </ConditionalLink>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  ghost: false,
  text: `Home`,
  href: `/`,
}
