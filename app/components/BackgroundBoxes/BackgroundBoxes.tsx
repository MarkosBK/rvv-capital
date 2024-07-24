'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import tailwindConfig from '@/tailwind.config'

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1)
  const cols = new Array(100).fill(1)

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) translateZ(0)`
      }}
      className={cn(
        'absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ',
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-32 h-16 border-l border-gray-200 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: tailwindConfig.theme.extend.colors.primary[50],
                transition: { duration: 1 }
              }}
              animate={{
                transition: { duration: 1 }
              }}
              key={`col` + j}
              className="w-32 h-16 border-r border-t border-gray-10 rounded-xl relative"
            />
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export const Boxes = React.memo(BoxesCore)
