'use client'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Map } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { address, email, phone } from '../../lib/constants'

export default function Footer() {
  const t = useTranslations()
  const pathname = usePathname()

  // Extract locale from the pathname if necessary
  const currentLocale = pathname.split('/')[1] || 'uk'

  return (
    <footer className="w-full absolute z-10 bg-primary text-center text-light-600 lg:text-left">
      <div className="flex flex-col lg:flex-row items-center justify-center border-b-2 border-primary-400 p-6 lg:justify-between">
        <div>
          <span className="font-semibold text-xl text-white">Metopttrade</span>
        </div>
        <div>{t('workTime')}: 9:00-20:00</div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
          <div id="contacts">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {t('contacts')}
            </h6>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <div className="h-6 w-6">
                <Map className="hidden md:block" strokeWidth={1} />
              </div>
              <a href="#" className="ml-3">
                {address[currentLocale as keyof typeof address] ||
                  address['uk']}
              </a>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <div className="h-6 w-6">
                <Mail
                  className="hidden md:block text-dark-600"
                  strokeWidth={1}
                />
              </div>
              <a href={`mailto:${email}`} className="ml-3">
                {email}
              </a>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <div className="h-6 w-6">
                <Phone
                  className="hidden md:block text-dark-600"
                  strokeWidth={1}
                />
              </div>
              <a href={`tel:${phone}`} className="ml-3">
                {phone}
              </a>
            </div>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {t('navigation')}
            </h6>
            <p className="mb-4">
              <a href="#about" className="text-light-600">
                {t('menu.about')}
              </a>
            </p>
            <p className="mb-4">
              <a href="#advantages" className="text-light-600">
                {t('menu.advantages')}
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {t('information')}
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              ТОВ «МЕТОПТТРЕЙД»
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              КОД ЄДРПОУ 42943493
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              ІПН 429434904822
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
