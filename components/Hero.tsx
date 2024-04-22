'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const initVariant = {
    hidden: {
      opacity: 1,
      y: 1000,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: 'linear',
        duration: 1.5,
        delay: index * 0.2310284,
      },
    }),
  }
  const middlegroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const billboardY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <section
      ref={ref}
      id="hero"
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div
        id="background"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/background.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      ></motion.div>
      <motion.div>
        <motion.div
          id="middleground"
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url(/middleground.png)`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: middlegroundY,
          }}
          initial="hidden"
          animate="visible"
          variants={initVariant}
          custom={3}
        ></motion.div>
        <motion.div
          id="billboard"
          className="absolute bg-no-repeat inset-0 z-20"
          style={{
            backgroundImage: `url(/midimage.png)`,
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
            y: billboardY,
          }}
          initial="hidden"
          animate="visible"
          variants={initVariant}
          custom={2}
        ></motion.div>
        <motion.div
          id="forground"
          className="absolute inset-0 z-30"
          style={{
            backgroundImage: `url(/foreground.png)`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
          initial="hidden"
          animate="visible"
          variants={initVariant}
          custom={0}
        ></motion.div>
      </motion.div>
    </section>
  )
}
