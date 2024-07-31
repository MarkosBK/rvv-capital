'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionProps } from './Section.types'

export const Section = ({
  children,
  moveSize = 200,
  delay = 0.1,
  ...props
}: SectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} {...props}>
      <div
        style={{
          transform: isInView ? 'none' : `translateY(${moveSize}px)`,
          opacity: isInView ? 1 : 0,
          transition: `all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </section>
  )
}
