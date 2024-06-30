'use client'

import styled from 'styled-components'
import { mediaQueries } from '@/lib/breakpoints'

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.title.fontSize}px;
  font-weight: ${({ theme }) => theme.font.title.fontWeight};

  ${mediaQueries('mobile')`
    // Mobile styles
  `}

  ${mediaQueries('tablet')`
    // Tablet styles
  `}

  ${mediaQueries('desktop')`
    // Desktop styles
  `}
`

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.subTitle.fontSize}px;
  font-weight: ${({ theme }) => theme.font.subTitle.fontWeight};
`

export const SubTitleSemiBold = styled.h2`
  font-size: ${({ theme }) => theme.font.subTitleSemiBold.fontSize}px;
  font-weight: ${({ theme }) => theme.font.subTitleSemiBold.fontWeight};
`

export const SubTitle2 = styled.h3`
  font-size: ${({ theme }) => theme.font.subTitle2.fontSize}px;
  font-weight: ${({ theme }) => theme.font.subTitle2.fontWeight};
`

export const SubTitle3 = styled.h4`
  font-size: ${({ theme }) => theme.font.subTitle3.fontSize}px;
  font-weight: ${({ theme }) => theme.font.subTitle3.fontWeight};
`

export const BodyRegular = styled.p`
  font-size: ${({ theme }) => theme.font.bodyRegular.fontSize}px;
  font-weight: ${({ theme }) => theme.font.bodyRegular.fontWeight};
`

export const BodyRegular2 = styled.p`
  font-size: ${({ theme }) => theme.font.bodyRegular2.fontSize}px;
  font-weight: ${({ theme }) => theme.font.bodyRegular2.fontWeight};
`

export const BodySemiBold = styled.p`
  font-size: ${({ theme }) => theme.font.bodySemiBold.fontSize}px;
  font-weight: ${({ theme }) => theme.font.bodySemiBold.fontWeight};
`

export const BodySemiBold2 = styled.p`
  font-size: ${({ theme }) => theme.font.bodySemiBold2.fontSize}px;
  font-weight: ${({ theme }) => theme.font.bodySemiBold2.fontWeight};
`

export const Caption = styled.span`
  font-size: ${({ theme }) => theme.font.caption.fontSize}px;
  font-weight: ${({ theme }) => theme.font.caption.fontWeight};
`

export const CaptionSemiBold = styled.span`
  font-size: ${({ theme }) => theme.font.caption.fontSize}px;
  font-weight: ${({ theme }) => theme.font.caption.fontWeight};
`

export const MobileSubtitleBold = styled.h2`
  font-size: ${({ theme }) => theme.font.mobileSubTitleBold.fontSize}px;
  font-weight: ${({ theme }) => theme.font.mobileSubTitleBold.fontWeight};
`

export const MobileSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.font.mobileSubTitle.fontSize}px;
  font-weight: ${({ theme }) => theme.font.mobileSubTitle.fontWeight};
`
