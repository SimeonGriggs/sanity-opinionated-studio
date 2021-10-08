import React from 'react'
import PropTypes from 'prop-types'
import {groq} from 'next-sanity'
import Head from 'next/head'

import {usePreviewSubscription} from '../lib/sanity'
import {getClient} from '../lib/sanity.server'
import ProseableText from '../components/ProseableText'
import Preview from '../components/Preview'
import {articleQuery} from '../lib/queries'

function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data
  }

  if (data.length === 1) {
    return data[0]
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0]
  }

  return data[0]
}

export default function Page({data, preview}) {
  const {data: previewData} = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  })

  const page = filterDataToSingleItem(previewData, preview)

  return (
    <>
      <Head>
        <title>{page?.title || 'Blog'}</title>
      </Head>
      <main>
        {preview && <Preview />}
        {page?.content?.length > 0 && (
          <article className="grid grid-cols-1 gap-y-0 md:gap-y-4 xl:gap-y-8">
            <ProseableText blocks={page.content} />
          </article>
        )}
      </main>
    </>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.object,
    query: PropTypes.string,
    queryParams: PropTypes.object,
  }).isRequired,
  preview: PropTypes.bool.isRequired,
}

export async function getStaticProps({params, preview = false}) {
  const query = articleQuery
  const queryParams = {slug: params.slug}
  const data = await getClient(preview).fetch(query, queryParams)

  if (!data) return {notFound: true}

  const page = filterDataToSingleItem(data, preview)

  return {
    props: {
      preview,
      data: {page, query, queryParams},
    },
  }
}

export async function getStaticPaths() {
  const allSlugsQuery = groq`*[defined(slug.current)][].slug.current`
  const pages = await getClient().fetch(allSlugsQuery)

  return {
    paths: pages.map((slug) => `/${slug}`),
    fallback: true,
  }
}
