'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { languages } from '@/lib/constants'
import Image from 'next/image'
import { Locale } from 'config'
import { usePathname, useRouter } from 'navigation'

const LocaleSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations()
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as Locale })
    setShowDropdown(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex justify-center items-center p-2 rounded-md focus:outline-none"
      >
        <Image
          className="h-5 w-5"
          //@ts-expect-error type err
          src={languages[locale].flag}
          alt={t(`languages.${locale}`)}
        />
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </button>

      <div
        className={`absolute mt-2 overflow-hidden bg-white rounded-md shadow-xl right-0 transform transition-all duration-300 ease-in-out min-w-max ${
          showDropdown ? 'opacity-100 scale-100' : 'h-0 py-0 opacity-0 scale-95'
        }`}
      >
        {Object.values(languages).map((language) => (
          <li
            key={language.locale}
            onClick={() => handleLocaleChange(language.locale)}
            className={`flex items-center py-3 px-4 cursor-pointer hover:bg-gray-200 whitespace-nowrap ${
              pathname === `/${language.locale}` ? 'bg-gray-200' : ''
            }`}
          >
            <Image
              className="h-5 w-5"
              src={language.flag}
              alt={t(`language-${language.locale}`)}
            />
            <span className="ml-2">{t(`languages.${language.locale}`)}</span>
          </li>
        ))}
      </div>
    </div>
  )
}

export default LocaleSwitcher
