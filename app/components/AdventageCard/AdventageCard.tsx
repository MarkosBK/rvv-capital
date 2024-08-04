import { useMemo } from 'react'
import { AdventageCardProps } from './Adventage.types'
import Image from 'next/image'

export const AdventageCard = ({
  title,
  description,
  className,
  icon
}: AdventageCardProps) => {
  const classes = useMemo(() => {
    return `md:p-8 lg:p-14 flex flex-col justify-start items-center ${className}`
  }, [className])
  return (
    <div className={classes}>
      {icon && (
        <div className="relative w-24 h-24">
          <Image className="w-full h-full" alt="ico" src={icon} fill />
        </div>
      )}
      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-5 text-base text-gray-600">{description}</p>
    </div>
  )
}
