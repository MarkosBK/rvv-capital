'use client'
// hooks/useBreakpoint.ts
import { useState, useEffect, useCallback } from 'react'

export type Breakpoint = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs' | ''

const breakpointsOrder: Record<Breakpoint, number> = {
  '2xs': 1,
  xs: 2,
  sm: 3,
  md: 4,
  lg: 5,
  xl: 6,
  '': 0
}

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('')
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) {
        setBreakpoint('xl')
      } else if (window.matchMedia('(min-width: 1024px)').matches) {
        setBreakpoint('lg')
      } else if (window.matchMedia('(min-width: 768px)').matches) {
        setBreakpoint('md')
      } else if (window.matchMedia('(min-width: 640px)').matches) {
        setBreakpoint('sm')
      } else if (window.matchMedia('(min-width: 480px)').matches) {
        setBreakpoint('xs')
      } else {
        setBreakpoint('2xs')
      }
    }

    window.addEventListener('resize', updateBreakpoint)
    updateBreakpoint()

    return () => {
      window.removeEventListener('resize', updateBreakpoint)
    }
  }, [])

  const isBreakpointMore = useCallback(
    (targetBreakpoint: Breakpoint): boolean => {
      return breakpointsOrder[breakpoint] > breakpointsOrder[targetBreakpoint]
    },
    [breakpoint]
  )

  const isBreakpointLess = useCallback(
    (targetBreakpoint: Breakpoint): boolean => {
      return breakpointsOrder[breakpoint] < breakpointsOrder[targetBreakpoint]
    },
    [breakpoint]
  )

  useEffect(() => {
    setIsMobile(isBreakpointLess('md'))
  }, [isBreakpointLess])

  return { breakpoint, isBreakpointMore, isBreakpointLess, isMobile }
}

export default useBreakpoint
