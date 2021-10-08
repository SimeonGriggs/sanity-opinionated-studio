import React from 'react'
import PropTypes from 'prop-types'

import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const icons = [CloudUploadIcon, LockClosedIcon, RefreshIcon, ShieldCheckIcon, CogIcon, ServerIcon]

export default function Columns({subtitle, title, description, columns}) {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {subtitle && (
          <h2 className="text-base font-semibold tracking-wider text-pink-600 uppercase">
            {subtitle}
          </h2>
        )}
        {title && (
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {title}
          </p>
        )}
        {description && (
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">{description}</p>
        )}
        {columns?.length > 0 && (
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {columns.map((col, colIndex) => (
                <div key={col._key} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-pink-500 rounded-md shadow-lg">
                          {React.createElement(icons[colIndex], {
                            className: 'h-6 w-6 text-white',
                            'aria-hidden': true,
                          })}
                        </span>
                      </div>
                      {col.title && (
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {col.title}
                        </h3>
                      )}
                      {col.description && (
                        <p className="mt-5 text-base text-gray-500">{col.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Columns.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      subtitle: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  description: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

Columns.defaultProps = {
  columns: [],
  description: ``,
  subtitle: ``,
  title: ``,
}
