import { lineHeight, fontSize, fontWeight } from './typography'
import { breakpoints } from './breakpoints'

export const theme = {
  breakpoints,
  font: {
    title: {
      fontSize: fontSize.title,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.title
    },
    subTitleSemiBold: {
      fontSize: fontSize.subTitleSemiBold,
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.subTitleSemiBold
    },
    subTitle: {
      fontSize: fontSize.subTitle,
      fontWeight: fontWeight.semiBold,
      lineHeight: lineHeight.subTitle
    },
    subTitle2: {
      fontSize: fontSize.subTitle2,
      fontWeight: fontWeight.semiBold2,
      lineHeight: lineHeight.subTitle2
    },
    subTitle3: {
      fontSize: fontSize.subTitle3,
      fontWeight: fontWeight.semiBold2,
      lineHeight: lineHeight.subTitle3
    },
    bodyRegular: {
      fontSize: fontSize.bodyRegular,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.bodyRegular
    },
    bodySemiBold: {
      fontSize: fontSize.bodySemiBold,
      fontWeight: fontWeight.semiBold2,
      lineHeight: lineHeight.bodySemiBold
    },
    bodyRegular2: {
      fontSize: fontSize.bodyRegular2,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.bodyRegular2
    },
    bodySemiBold2: {
      fontSize: fontSize.bodySemiBold2,
      fontWeight: fontWeight.semiBold3,
      lineHeight: lineHeight.bodySemiBold2
    },
    caption: {
      fontSize: fontSize.caption,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.caption
    },
    captionSemiBold: {
      fontSize: fontSize.captionSemiBold,
      fontWeight: fontWeight.semiBold,
      lineHeight: lineHeight.captionSemiBold
    },
    mobileSubTitle: {
      fontSize: fontSize.mobileSubTitle,
      fontWeight: fontWeight.semiBold2,
      lineHeight: lineHeight.mobileSubTitle
    },
    mobileSubTitleBold: {
      fontSize: fontSize.mobileSubTitleBold,
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.mobileSubTitleBold
    }
  }
}
