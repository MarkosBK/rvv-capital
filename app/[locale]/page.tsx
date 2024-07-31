import Image from 'next/image'
import MainImage from '/public/images/main-image.jpeg'
import MainImageMobile from '/public/images/main-image-mobile.jpg'
import MetalImg1 from '/public/images/metal1.jpeg'
import MetalImg2 from '/public/images/metal2.jpg'
import MetalImg3 from '/public/images/metal3.jpg'
import { Section } from '@/components/Section'
import { AnimatedText } from '@/components/AnimatedText/AnimatedText'
// import { Boxes } from '@/components/BackgroundBoxes/BackgroundBoxes'
import { StickyScroll } from '@/components/StickyScroll/StickyScroll'
import { ChevronDown } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { AdventageCard } from '@/components/AdventageCard'
import InfoSection from '@/components/InfoSection/InfoSection'
import { AdaptiveBlock } from '@/components/AdaptiveBlock/AdaptiveBlock'

const App = async () => {
  const t = await getTranslations()

  const content = [
    {
      title: t('tradingActivity'),
      description: t('comprehensiveServices'),
      image: MetalImg1
    },
    {
      title: t('coalSupply'),
      description: t('coalSupplyDetails'),
      image: MetalImg2
    },
    {
      title: t('scrapMetalSupply'),
      description: t('scrapMetalSupplyDetails'),
      image: MetalImg3
    }
  ]

  const imageStyleMobile = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${MainImageMobile.src}')`
  }

  const HeroComponent = ({ dark = false }: { dark?: boolean }) => {
    return (
      <div
        className={`h-[calc(100vh-64px)] md:h-auto flex justify-center md:justify-start flex-wrap ${dark && 'text-white'}`}
      >
        <div className="w-full sm:w-8/12 relative overflow-hidden">
          {/* <Boxes /> */}

          <div className="mx-auto h-full py-40 md:py-10 sm:px-10">
            <nav className="flex px-4 justify-center lg:justify-between items-center">
              <div className="text-3xl lg:text-4xl font-bold relative z-10 ">
                <span>RVV CAPITAL GROUP</span>
              </div>
            </nav>
            <div className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-2xl lg:text-5xl font-bold relative z-10 text-center lg:text-start">
                  <AnimatedText
                    el="span"
                    text={[t('leadingInternationalSupplier')]}
                    repeatDelay={100000}
                    className="relative z-10"
                  />
                </h1>
                <div className="hidden md:block w-20 mx-auto lg:mx-0 h-2 bg-primary-700 my-6 relative z-10"></div>
                <p className="hidden md:block text-lg lg:text-xl mb-10 relative z-10 text-center lg:text-start">
                  {/* <ReadMore
                      id="read-more-text"
                      amountOfWords={24}
                      text={t('missionStatement')}
                    /> */}
                  {t('missionStatement')}
                </p>
                <div className="lg:mr-auto lg:w-min mt-20 lg:mt-16 flex justify-center">
                  <a
                    href="#advantages"
                    className="hidden md:flex text-nowrap items-center relative z-10 bg-primary-800 text-white active:opacity-80 transition-opacity duration-100 text-xl font-medium px-6 py-3"
                  >
                    {t('moreDetails')}
                    <ChevronDown className="w-6 h-6 mt-[2px] ml-1" />
                  </a>
                  <a
                    href="#about"
                    className="flex md:hidden text-nowrap items-center relative z-10 bg-primary-800 text-white active:opacity-80 transition-opacity duration-100 text-xl font-medium px-6 py-3"
                  >
                    {t('moreDetails')}
                    <ChevronDown className="w-6 h-6 mt-[2px] ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={MainImage}
          alt="Leafs"
          className="hidden md:block w-full h-48 object-cover sm:h-[calc(100vh-64px)] sm:w-4/12"
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full">
      <AdaptiveBlock
        bpMore="md"
        id="about"
        className="absolute opacity-0"
        style={{ top: '-100px' }}
      ></AdaptiveBlock>

      <Section moveSize={0} delay={0}>
        <div className="hidden md:block">
          <HeroComponent />
        </div>
        <div className="block md:hidden relative" style={imageStyleMobile}>
          <div className="absolute h-full w-full left-0 top-0 backdrop-blur-none bg-black/50"></div>
          <HeroComponent dark />
        </div>
      </Section>

      <Section className="block md:hidden px-4">
        <div className="flex md:hidden justify-center">
          <div className="max-w-screen-lg w-full">
            <h1
              className={`w-full max-w-screen-xl relative text-center mt-32 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-4xl lg:text-5xl md:leading-[3.4rem] lg:leading-[3.8rem]`}
            >
              {t('menu.aboutUs')}
              <AdaptiveBlock
                bpLess="lg"
                id="about"
                className="absolute opacity-0"
                style={{ top: '-100px' }}
              ></AdaptiveBlock>
            </h1>
          </div>
        </div>
        <div className="w-20 mx-auto lg:mx-0 h-2 bg-primary-700 my-6 relative z-10"></div>

        <p className="block md:hidden text-lg lg:text-xl mb-10 relative z-10 text-center lg:text-start">
          {t('missionStatement')}
        </p>
      </Section>

      <Section>
        <div className="flex justify-center">
          <div className="max-w-screen-lg w-full">
            <h1
              className={`w-full max-w-screen-xl relative text-center mt-32 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-4xl lg:text-5xl md:leading-[3.4rem] lg:leading-[3.8rem]`}
            >
              {t('ourAdvantages')}
              <div
                id="advantages"
                className="absolute opacity-0"
                style={{ top: '-100px' }}
              ></div>
            </h1>
          </div>
        </div>
        <div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
              <AdventageCard
                color="bg-primary-100"
                title={t('globalPartnerNetwork')}
                description={t('globalPartnerNetworkDetails')}
              />
              <AdventageCard
                color="bg-primary-200"
                title={t('professionalismAndReliability')}
                description={t('professionalismAndReliabilityDetails')}
                className="md:border-l md:border-gray-200"
              />
              <AdventageCard
                color="bg-primary-300"
                title={t('qualityAndResponsibility')}
                description={t('qualityAndResponsibilityDetails')}
                className="md:border-l md:border-gray-200"
              />
              <AdventageCard
                color="bg-primary-300"
                title={t('longTermCooperation')}
                description={t('longTermCooperationDetails')}
                className="md:border-t md:border-gray-200"
              />
              <AdventageCard
                color="bg-primary-200"
                title={t('reliablePartner')}
                description={t('reliablePartnerDetails')}
                className="md:border-l md:border-gray-200 md:border-t"
              />
              <AdventageCard
                color=""
                title=""
                description=""
                className="hidden md:block md:border-l md:border-gray-200 md:border-t"
              />
            </div>
          </div>
        </div>
      </Section>
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full">
          <Section>
            <h1
              className={`w-full max-w-screen-xl relative text-center mt-32 bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-4xl lg:text-5xl md:leading-[3.4rem] lg:leading-[3.8rem]`}
            >
              {t('mainActivities')}
              <div
                id="directions"
                className="absolute opacity-0"
                style={{ top: '-100px' }}
              ></div>
            </h1>
            <div className="hidden lg:block my-8 md:my-32">
              <StickyScroll content={content} />
            </div>
            <div
              className={`block lg:hidden mt-10 w-full max-w-screen-xl z-10`}
            >
              {content.map((item, index) => (
                <div className="my-8 mb-24" key={index}>
                  <InfoSection reverse={index % 2 === 0} image={item.image}>
                    <h3 className="mb-3 mt-3 md:mt-0 text-center md:text-left font-bold text-primary-600 text-xl lg:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-dark-400">
                      {item.description}
                    </p>
                  </InfoSection>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
export default App
