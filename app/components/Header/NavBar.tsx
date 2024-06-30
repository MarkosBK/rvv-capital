'use client'

import Logo from '/public/images/logo.png'
import { useTranslations } from 'next-intl'
import { Link } from '../Link/Link'
import { phone } from '@/app/lib/constants'
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher'
import paths from '@/app/lib/paths'
import headerLinks from '@/app/lib/header-links'
import { NavbarNative } from './NavBarNative'
import Image from 'next/image'

export const NavBar = () => {
  const t = useTranslations()

  return (
    <>
      <header className="flex items-center justify-between sticky top-0 w-full bg-white z-30 transition-all">
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between">
          <Link href={paths.home()}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image src={Logo} alt="Logo" className="h-8 w-auto" />
              </div>
            </div>
          </Link>
        </div>
        <div className="md:mx-5 flex items-center justify-end text-base leading-5 flex-1">
          <div className="hidden md:block flex-1">
            {headerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-primary-700 hover:text-primary-400 transition-all duration-150"
              >
                {t(link.title)}
              </Link>
            ))}
          </div>
          <Link
            href={`tel:${phone}`}
            className="hidden md:block p-1 font-medium text-primary-700 hover:text-primary-400 transition-all duration-150 mr-4"
          >
            {phone}
          </Link>
          <LocaleSwitcher />
          <NavbarNative />
        </div>
        {/* <div>
        <button
          className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
          onClick={() => setShowSignInModal(true)}
        >
          Sign In
        </button>
        </div> */}
      </header>
    </>
  )
}
