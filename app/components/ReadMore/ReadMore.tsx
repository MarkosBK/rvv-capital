'use client'
import { useTranslations } from 'next-intl'
import { KeyboardEventHandler, useCallback, useState } from 'react'

interface ReadMoreProps {
  id: string
  text: string
  amountOfWords?: number
}

export const ReadMore = ({ id, text, amountOfWords = 36 }: ReadMoreProps) => {
  const t = useTranslations()
  const [isExpanded, setIsExpanded] = useState(false)
  const splittedText = text.split(' ')
  const itCanOverflow = splittedText.length > amountOfWords
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : text
  const endText = splittedText.slice(amountOfWords - 1).join(' ')

  const handleKeyboard: KeyboardEventHandler<HTMLSpanElement> = useCallback(
    (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        setIsExpanded(!isExpanded)
      }
    },
    [isExpanded]
  )

  return (
    <p id={id}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <span
            className={`${!isExpanded && 'hidden'}`}
            aria-hidden={!isExpanded}
          >
            {endText}
          </span>
          <span
            className="text-blue-500 hover:text-blue-400 transition-colors ml-2"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? t('showLess') : t('showMore')}
          </span>
        </>
      )}
    </p>
  )
}
