
import { LayoutGroup, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '~/components/button'
import RedirectButton from '~/components/redirectButton'
import isMobile from '~/components/scripts/isMobile'
import ShimmerButton from '~/components/subcomponents/shimmerButton'
import SwitchLanguageButton from '~/components/switchLanguageButton'
import i18n from '~/localizations/config'
// import { t } from "app/root"

const HomeHero: React.FC = () => {
  const maxBorderRadius = 30
  const maxScale = isMobile() ? 0.9 : 0.95
  const maxTopMargin = 180
  const scrollModifier = 0.006
  const [scrollY, setScrollY] = useState(0)
  const [height, updateHeight] = useState(0)
  const { t } = useTranslation();


  useEffect(() => {
    updateHeight(window.innerHeight)

    const handleScroll = () => {
      setScrollY(Math.min(window.scrollY * scrollModifier, 1))
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <LayoutGroup>
      <div style={{ height: "110vh", marginBottom: "-110vh" }}><div className='flex flex-row sticky justify-center top-5 z-1000'>
        <SwitchLanguageButton
          handleClick={() => {
            i18n.changeLanguage(i18n.language === "en" ? "hi" : "en")
          }}
          borderless={true}
          title={'switchLanguage'}
          content={
            <motion.p className='text-center text-3xl' style={{ margin: "15px 30px" }}>
              {t("home.hero.switchLanguage")}
            </motion.p>
          }
          loadingIndex={6}
        />
      </div></div>
      <div style={{ height: maxTopMargin + height + "px" }}>
        <motion.div
          className='h-screen w-full sticky overflow-hidden'
          animate={{
            top: 0
          }}
          transition={{ duration: 0 }}
        >
          <motion.div
            animate={{
              borderRadius: `${scrollY * maxBorderRadius}px`,
              scale: maxScale + (1 - maxScale) * (1 - scrollY),
              // position: scrollY < 1 ? 'sticky' : 'relative'
              position: 'sticky'
            }}
            style={{ overflow: 'hidden', top: '0px' }}
            transition={{ duration: 0 }}
          >
            <motion.img
              className='h-screen w-screen object-cover'
              src='https://github.com/Firebolt9907/sharmaPhotography/blob/master/photos/PXL_20250728_215412293.MP.jpg?raw=true'
              initial={{ opacity: 0, borderRadius: '20px', scale: 0.9 }}
              animate={{
                opacity: 1,
                borderRadius: '0px',
                scale: 1
              }}
            />
            <motion.div
              className='h-screen w-screen absolute top-0'
              style={{
                backdropFilter: `blur(${scrollY * 20}px)`,
                WebkitTransform: 'translate3d(0, 0, 0);'
              }}
            ></motion.div>
          </motion.div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col'>
            <motion.div
              animate={{ scale: 1 + scrollY * 0.1 }}
              transition={{ duration: 0 }}
              style={{
                margin: '0 40px'
              }}
            >
              <motion.h1
                className='text-white'
                style={{
                  fontSize: '100px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontFamily: 'Bebas Neue',
                  //   position: 'sticky',
                  top: 50
                }}
                initial={{
                  opacity: 0, scale: 0.8,
                }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, type: 'spring', delay: 0.3 }}
              >
                {t("home.hero.title")}
              </motion.h1>
              <motion.h2
                className='text-white'
                style={{
                  fontSize: '40px',
                  fontWeight: 'none',
                  textAlign: 'center',
                  fontFamily: 'Bebas Neue',
                  //   position: 'sticky',
                  top: 50
                }}
                initial={{
                  opacity: 0, scale: 0.8,
                }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, type: 'spring', delay: 0.3 }}
              >
                {t("home.hero.subtitle")}
              </motion.h2>
              <motion.div className='flex flex-row gap-6 justify-center'>
                <RedirectButton
                  handleClick={() => {
                    window.location.href = '/paintings'
                  }}
                  borderless={true}
                  title={'paintings'}
                  content={
                    <motion.p className='m-6 text-center text-3xl'>
                      {t("home.hero.button1")}
                    </motion.p>
                  }
                  loadingIndex={4}
                />
                <RedirectButton
                  handleClick={() => {
                    window.location.href = '/photos'
                  }}
                  borderless={true}
                  title={'photos'}
                  content={
                    <motion.p className='m-6 text-center text-3xl'>
                      {t("home.hero.button2")}
                    </motion.p>
                  }
                  loadingIndex={5}
                />
              </motion.div>
            </motion.div>
            <motion.h2
              className='text-white w-screen'
              style={{
                fontSize: '5vw',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring', delay: 0.4 }}
            ></motion.h2>
          </div>
          <motion.div animate={{ opacity: 1 - scrollY }}>
            <motion.p
              className='absolute left-1/2 transform -translate-x-1/2 '
              style={{
                rotateX: 180,
                textAlign: 'center',
                fontSize: '80px',
                zIndex: 2
              }}
              initial={{ bottom: '10px' }}
              animate={{ bottom: '40px' }}
              transition={{
                repeatType: 'reverse',
                repeat: Infinity,
                duration: 1
              }}
            >
              ^
            </motion.p>
          </motion.div>
        </motion.div>
      </div >
    </LayoutGroup >
  )
}
export default HomeHero
