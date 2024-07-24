'use client'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Map } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { information } from '../../lib/constants'

export default function Footer() {
  const t = useTranslations()
  const pathname = usePathname()

  // Extract locale from the pathname if necessary
  const currentLocale = (pathname.split('/')[1] ||
    'uk') as keyof typeof information

  return (
    <footer className="w-full absolute z-10 bg-primary-100 text-center text-light-600 lg:text-left">
      <div className="flex flex-col lg:flex-row items-center justify-center border-b-2 border-primary-400 p-6 lg:justify-between">
        <div>
          <span className="font-semibold text-xl text-primary-600">
            RVV CAPITAL GROUP
          </span>
        </div>
        {/* <div>{t('workTime')}: 9:00-20:00</div> */}
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
              <a className="ml-3">
                {information[currentLocale].address || information.en.address}
              </a>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <div className="h-6 w-6">
                <Mail
                  className="hidden md:block text-dark-600"
                  strokeWidth={1}
                />
              </div>
              <a
                href={`mailto:${information[currentLocale].email}`}
                className="ml-3"
              >
                {information[currentLocale].email}
              </a>
            </div>
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <div className="h-6 w-6">
                <Phone
                  className="hidden md:block text-dark-600"
                  strokeWidth={1}
                />
              </div>
              <a
                href={`tel:${information[currentLocale].phone}`}
                className="ml-3"
              >
                {information[currentLocale].phone}
              </a>
            </div>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {t('navigation')}
            </h6>
            <p className="mb-4">
              <a href="#about" className="text-light-600">
                {t('menu.aboutUs')}
              </a>
            </p>
            <p className="mb-4">
              <a href="#advantages" className="text-light-600">
                {t('menu.advantages')}
              </a>
            </p>
            <p className="mb-4">
              <a href="#directions" className="text-light-600">
                {t('menu.directions')}
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {t('information')}
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              Tenant: RVV CAPITAL GROUP - FZCO
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              Licence No.: 46229
            </p>
            {/* <p className="mb-4 flex items-center justify-center md:justify-start">
              ІПН 429434904822
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
