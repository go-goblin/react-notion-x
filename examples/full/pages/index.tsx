import { type ExtendedRecordMap } from 'notion-types'

import { NotionPage } from '../components/NotionPage'
import {
  previewImagesEnabled,
  rootDomain,
  rootNotionPageId
} from '../lib/config'
import * as notion from '../lib/notion'

export const getStaticProps = async () => {
  const pageId = rootNotionPageId
  console.log('Page ID:', rootNotionPageId)
  console.log('➡️ getStaticProps: начало')

  const recordMap = await notion.getPage(pageId)

  console.log('✅ getStaticProps: получили recordMap')

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <NotionPage
      recordMap={recordMap}
      rootDomain={rootDomain}
      rootPageId={rootNotionPageId}
      previewImagesEnabled={previewImagesEnabled}
    />
  )
}
