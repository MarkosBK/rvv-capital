import { useMemo } from 'react'
import { AdventageCardProps } from './Adventage.types'

export const AdventageCard = ({
  title,
  description,
  className,
  color
}: AdventageCardProps) => {
  const classes = useMemo(() => {
    return `md:p-8 lg:p-14 flex flex-col justify-start items-center ${className}`
  }, [className])
  return (
    <div className={classes}>
      <div
        className={`w-14 h-14 rounded-full ${color} flex justify-center items-center`}
      >
        <i className="fa-solid fa-chart-column text-3xl text-gray-900"></i>
      </div>
      <h3 className="mt-12 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-5 text-base text-gray-600">{description}</p>
    </div>
  )
}
