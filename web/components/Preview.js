import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Preview() {
  const {asPath} = useRouter()

  return (
    <div className="fixed z-50 w-screen h-screen pointer-events-none flex flex-col justify-end">
      <div className="pointer-events-auto mr-auto p-2">
        <Link href={`/api/exit-preview?slug=${asPath}`}>
          <a className="block bg-lime-600 hover:bg-lime-500 rounded text-white font-bold px-4 py-3 text-sm leading-none">
            Preview Mode Active
          </a>
        </Link>
      </div>
    </div>
  )
}
