import { css } from 'styled-components'

export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024
}

export const mediaQueries = (key: string) => {
  return (style: TemplateStringsArray | string) => css`
    @media (min-width: ${(props) => props.theme.breakpoints[key]}) {
      ${style};
    }
  `
}
