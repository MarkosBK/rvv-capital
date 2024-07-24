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
      },
      colors: {
        primary: {
          DEFAULT: '#C2C2C2',
          '50': '#FAFAFA',
          '100': '#F2F2F2',
          '200': '#E6E6E6',
          '300': '#DBDBDB',
          '400': '#CFCFCF',
          '500': '#C2C2C2',
          '600': '#9C9C9C',
          '700': '#757575',
          '800': '#4D4D4D',
          '900': '#262626',
          '950': '#141414'
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config

export default tailwindConfig
