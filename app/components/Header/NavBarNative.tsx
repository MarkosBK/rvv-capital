'use client'

import headerLinks from '@/app/lib/header-links'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Link } from '../Link/Link'
import { Menu, X } from 'lucide-react'

export const NavbarNative = () => {
  const [navShow, setNavShow] = useState(false)
  const t = useTranslations()

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="ml-2 mr-4 h-8 w-8 rounded py-1 flex items-center"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <Menu className="w-[28px] h-[28px] text-gray-500" />
      </button>
      <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="mt-4 mr-4 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <X className="w-[24px] h-[24px] text-gray-500" />
          </button>
        </div>
        <nav className="fixed h-full">
          {headerLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold tracking-widest text-gray-900"
                onClick={onToggleNav}
              >
                {t(link.title)}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
