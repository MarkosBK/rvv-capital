import type { Config } from 'tailwindcss'

const tailwindConfig = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './app/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      fontFamily: {
        display: ['var(--font-sf)', 'system-ui', 'sans-serif'],
        default: ['var(--font-inter)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config

export default tailwindConfig
