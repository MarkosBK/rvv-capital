'use client'
import React, { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import Image from 'next/image'

export const StickyScroll = ({
  content,
  contentClassName
}: {
  content: {
    title: string
    description: string
    image: any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<any>(null)
  // Используем useScroll из framer-motion для отслеживания прогресса прокрутки
  const { scrollYProgress } = useScroll({
    // Прокрутка отслеживается в пределах элемента, на который ссылается ref
    target: ref,
    // Устанавливаем смещение прокрутки
    offset: ['start center', 'end start']
  })
  const cardLength = content.length

  // Обработчик события изменения scrollYProgress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Определяем ближайший индекс карточки на основе прогресса прокрутки
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        // Находим индекс ближайшего breakpoints
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    // Обновляем state активной карточки
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <div className="flex justify-center relative space-x-10">
      <motion.div className="overflow-y-auto flex-1" ref={ref}>
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3
                }}
                key={item.title + index}
                className={`my-20 lg:my-40 ${index === content.length - 1 && 'mb-10'} ${index === 0 && 'mt-10'}`}
              >
                <h2 className={cn('text-2xl font-bold text-gray-500')}>
                  {item.title}
                </h2>
                <p className="text-lg text-gray-600 mt-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <div
        className={cn(
          'hidden lg:block h-80 rounded-md bg-white sticky top-[calc(50vh-160px)]', // Позиционирование sticky для центрирования
          contentClassName
        )}
      >
        <Image
          src={content[activeCard].image}
          className="h-full w-[450px] object-cover rounded-2xl"
          alt="img"
        />
      </div>
    </div>
  )
}
