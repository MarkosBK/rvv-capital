import { Metadata, Viewport } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import StyledComponentsRegistry from '@/components/StyledComponentRegistry'
import '../../styles/globals.css'
import StyledComponentThemeProvider from '@/app/providers/ThemeProvider'
import { Suspense } from 'react'
import Footer from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { ScrollProgress } from '@/components/ScrollProgress/ScrollProgress'

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  width: 'device-width',
  themeColor: '#0096d7'
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: JSX.Element
  params: { locale: string }
}) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <StyledComponentThemeProvider>
            <NextIntlClientProvider messages={messages}>
              <Suspense fallback="...">
                <ScrollProgress />
                <Header />
              </Suspense>
              <div className="flex min-h-screen w-full mx-auto flex-col">
                {children}
              </div>
              <Footer />
            </NextIntlClientProvider>
          </StyledComponentThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'RVV - Capital'
}
