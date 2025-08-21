import { UlistIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projectList',
  title: 'Services Page',
  type: 'document',
  icon: UlistIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'pageTitle',
      description: 'This is the title of the services page.',
      title: 'Services Page Title',
      type: 'string',
      initialValue: 'Our Services',
    }),
    defineField({
      name: 'subtitle',
      description: 'This is the subtitle of the services page.',
      title: 'Services Page Subtitle',
      type: 'string',
      initialValue: 'Comprehensive weight loss and health management services',
    }),
    defineField({
      name: 'title',
      description: 'This is the page name for the site header/navbar.',
      title: 'Services Header/Navbar Title',
      type: 'string',
      initialValue: 'Services',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      pageTitle: 'pageTitle',
    },
    prepare({ pageTitle }) {
      return {
        title: 'Services Page',
        subtitle: pageTitle,
      }
    },
  },
})
