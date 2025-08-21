import { SiteMeta } from 'components/global/SiteMeta'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { ProjectPayload, SettingsPayload, ShowcaseContent } from 'types'

import { CustomPortableText } from '../../shared/CustomPortableText'
import Layout from '../../shared/Layout'
import ContentHeader from '../content/ContentHeader'
import ContentNavigation from '../content/ContentNavigation'

export interface ProjectPageProps {
  project: ProjectPayload | undefined
  projects: ShowcaseContent[]
  settings: SettingsPayload | undefined
  homePageTitle: string | undefined
  preview?: boolean
}

export default function ProjectPage({
  project,
  projects,
  settings,
  homePageTitle,
  preview,
}: ProjectPageProps) {
  const router = useRouter()
  const { coverImage, description, excerpt, tags, date, title } = project || {}

  useEffect(() => {
    if (!project?.slug && !preview) {
      router.push('/404')
    }
  }, [project, preview, router])

  if (!project && !preview) {
    return null
  }

  return (
    <>
      <SiteMeta
        baseTitle={homePageTitle}
        description={excerpt || ''}
        image={coverImage}
        title={title}
      />

      <Layout settings={settings} preview={preview}>
        <article className="mx-auto max-w-3xl">
          <ContentHeader title={title || ''} date={date || ''} tags={tags} />
          <div className="portableText">
            <CustomPortableText value={description} />
          </div>
          <ContentNavigation content={projects} slug={project?.slug || ''} />
        </article>
      </Layout>
    </>
  )
}
