'use client'
import { motion, useScroll } from 'framer-motion'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div className="bg-white w-full sticky top-0 left-0 z-[100]">
      <motion.div
        className="progress-bar bg-primary"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
