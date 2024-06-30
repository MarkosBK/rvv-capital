import enFlag from '/public/flags/en.svg'
import ruFlag from '/public/flags/ru.svg'

export const phone = '+37259321287'
export const email = 'metopttreid@gmail.com'
export const address = {
  ru: 'ЮР. АДРЕС: 50000, Днепропетровская обл., город Кривой Рог, ул. Церковная, дом 3',
  uk: 'ЮР. АДРЕСА: 50000, Дніпропетровська обл., місто Кривий Ріг, вул. Церковна, будинок 3',
  en: 'LEG. ADDRESS: 50000, Dnipropertrovsk region, Kryvyi Rih, str. Tcerkovna, 3'
}

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

export type LanguagesType = (typeof languages)[keyof typeof languages]
