import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'ru'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ru: '/pathnames'
  }
} satisfies Pathnames<typeof locales>

export type Locale = (typeof locales)[number]

export type AppPathnames = keyof typeof pathnames
