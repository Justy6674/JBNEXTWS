import { SettingsPayload } from 'types'

export const fallbackSettings: SettingsPayload = {
  resume: null as any,
  header: {
    menuItems: [],
    blackWhiteHeader: false,
  },
  footer: {
    footerText: '',
    blackWhiteFooter: false,
  },
  socials: {
    linkedin: null as any,
    instagram: null as any,
    facebook: null as any,
    pinterest: null as any,
    vsco: null as any,
    youtube: null as any,
    tiktok: null as any,
    twitter: null as any,
  },
  ogImage: null as any,
}