import Image from 'next/image'
import { InfoSectionProps } from './InfoSection.types'

export default function InfoSection({
  children,
  image,
  reverse = false,
  contentStart = false,
  hideImage = false
}: InfoSectionProps) {
  return (
    <div
      className={`relative px-4 xl:px-0 flex flex-col md:flex-row ${contentStart ? 'items-start' : 'items-center'}`}
    >
      <div
        className={`flex-1 ${hideImage ? '' : 'md:py-16'} order-2 ${reverse ? 'md:order-2 md:pl-16' : 'md:order-1 md:pr-16'}`}
      >
        {children || ''}
      </div>
      {image ? (
        <div
          className={`w-full ${hideImage ? 'flex-[0-0-0]' : 'flex-1'} px-4 md:px-0 relative order-1 flex items-center ${reverse ? 'md:order-1' : 'md:order-2'}`}
        >
          <div className="xl:rounded-2xl rounded-lg overflow-hidden w-full">
            <Image
              className="object-cover w-full aspect-[6/4]"
              src={image}
              alt="section"
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
