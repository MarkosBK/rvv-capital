import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import MetalImg from '/public/images/metal.jpeg'
import { Suspense } from 'react'
import { Section } from '@/components/Section'
import InfoSection from '@/components/InfoSection/InfoSection'

const App = async () => {
  const t = await getTranslations()
  return (
    <div className="flex flex-col w-full">
      <Section>
        <div className="relative w-full z-10">
          <div className="mx-auto">
            <div className="relative shadow-xl sm:overflow-hidden md:px-32">
              <div className="absolute inset-0">
                <Suspense fallback={<div>loading...</div>}>
                  <Image
                    className="object-cover w-full h-full"
                    src={MetalImg}
                    alt="preview"
                    fill
                  />
                </Suspense>
                <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
              </div>
              <div className="relative w-full px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <p className="relative text-center md:text-start mt-5 max-w-xl text-xl md:text-2xl tracking-wide text-white font-extralight">
                  <b className="text-2xl md:text-3xl">RVV CAPITAL GROUP</b> -{' '}
                  {t('yourPartnerText')}
                </p>
                <p className="relative mt-8 text-center md:text-start mb-16 md:mb-48 max-w-xl text-xl md:text-2xl tracking-wide text-white font-extralight	">
                  {t('hightQualityText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <div className="flex flex-col items-center">
        <Section>
          <h1
            className={`w-full max-w-screen-xl rellative text-center mt-32 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-4xl lg:text-5xl md:leading-[3.4rem] lg:leading-[3.8rem]`}
          >
            {t('aboutUs')}
            <div
              id="about"
              className="absolute opacity-0"
              style={{ top: '-100px' }}
            ></div>
          </h1>

          <div
            className={`w-full max-w-screen-xl z-10`}
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          >
            <div className="my-16 text-center md:text-start">
              <InfoSection image={MetalImg}>
                <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-dark-400">
                  {t('aboutUsText1')}
                </p>
              </InfoSection>
            </div>
          </div>
        </Section>
        <Section>
          <h1
            className={`w-full max-w-screen-xl rellative text-center mt-32 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-4xl lg:text-5xl md:leading-[3.4rem] lg:leading-[3.8rem]`}
          >
            {t('aboutUs')}
            <div
              id="about"
              className="absolute opacity-0"
              style={{ top: '-100px' }}
            ></div>
          </h1>

          <div
            className={`w-full max-w-screen-xl z-10`}
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          >
            <div className="my-16 text-center md:text-start">
              <InfoSection reverse image={MetalImg}>
                <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-dark-400">
                  {t('aboutUsText1')}
                </p>
              </InfoSection>
            </div>
          </div>
        </Section>
        <Section>
          <h1
            className={`w-full max-w-screen-xl rellative text-center mt-32 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-4xl lg:text-5xl md:leading-[3.4rem] lg:leading-[3.8rem]`}
          >
            {t('aboutUs')}
            <div
              id="about"
              className="absolute opacity-0"
              style={{ top: '-100px' }}
            ></div>
          </h1>

          <div
            className={`w-full max-w-screen-xl z-10`}
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          >
            <div className="my-16 text-center md:text-start">
              <InfoSection image={MetalImg}>
                <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-dark-400">
                  {t('aboutUsText1')}
                </p>
              </InfoSection>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
export default App
