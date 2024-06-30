/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link'
import { LinkProps } from './Link.types'

export const Link = ({ href, ...rest }: LinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <NextLink href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}
