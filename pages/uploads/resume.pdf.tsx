import { SiteMeta } from 'components/global/SiteMeta'
import { getHomePageTitle, getSettings } from 'lib/sanity.client'
import { fallbackSettings } from 'lib/sanity.fallbacks'
import { GetStaticProps } from 'next'
import { SettingsPayload } from 'types'

interface PageProps {
  settings: SettingsPayload
  homePageTitle: string
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ResumePage(props: PageProps) {
  const { settings, homePageTitle } = props

  return (
    <>
      <SiteMeta
        baseTitle={homePageTitle}
        image={settings?.ogImage}
        title="Resume"
      />

      <iframe src={settings.resume} className="h-full w-full" />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const token = previewData.token
  const [settings, homePageTitle] = await Promise.all([
    getSettings({ token }),
    getHomePageTitle({ token }),
  ])

  return {
    props: {
      settings: settings ?? fallbackSettings,
      homePageTitle: homePageTitle ?? null,
      preview,
      token: previewData.token ?? null,
    },
    revalidate: 1,
  }
}
