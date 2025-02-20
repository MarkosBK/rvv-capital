import createMiddleware from 'next-intl/middleware'
import { pathnames, locales } from './config'

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)',
    '/(en)/:path*',
    '/'
  ]
}

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames
})
