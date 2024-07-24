import enFlag from '/public/flags/en.svg'
import ruFlag from '/public/flags/ru.svg'

export const languages = {
  en: {
    locale: 'en',
    flag: enFlag,
    title: 'English'
  },
  ru: {
    locale: 'ru',
    flag: ruFlag,
    title: 'Russian'
  }
} as const

export const information = {
  en: {
    address:
      'Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates',
    email: 'rvvcapitalgroup@gmail.com',
    phone: '+349878971838'
  },
  ru: {
    address:
      'Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates',
    email: 'rvvcapitalgroup@gmail.com',
    phone: '+349878971838'
  }
}

export type LanguagesType = (typeof languages)[keyof typeof languages]
