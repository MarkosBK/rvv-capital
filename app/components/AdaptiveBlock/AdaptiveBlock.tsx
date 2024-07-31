'use client'

import useBreakpoint from '@/lib/hooks/useBreakpoint'
import { AdaptiveBlockProps } from './AdaptiveBlock.types'

export const AdaptiveBlock = ({
  children,
  bpLess,
  bpMore,
  ...props
}: AdaptiveBlockProps) => {
  const res = <div {...props}>{children}</div>
  const { isBreakpointLess, isBreakpointMore } = useBreakpoint()
  if (bpLess && bpMore) {
    if (isBreakpointLess(bpLess) && isBreakpointMore(bpMore)) {
      return res
    }
    return null
  }

  if (bpLess) {
    return isBreakpointLess(bpLess) ? res : null
  }

  if (bpMore) {
    return isBreakpointMore(bpMore) ? res : null
  }
  return null
}
