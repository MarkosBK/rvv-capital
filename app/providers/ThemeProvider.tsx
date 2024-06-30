'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/lib/theme'

function StyledComponentThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledComponentThemeProvider
