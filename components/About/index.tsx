import Container from '@common/Container'
import React, { useEffect } from 'react'
import s from './About.module.css'
import cn from 'classnames'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { SkillsAnimation } from '@components/UI'
import AboutAnimation from '@components/UI/AboutAnimation'
import gsap from 'gsap'
import * as THREE from 'three'

function About() {
  const { scrollYProgress } = useViewportScroll()
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.5])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -80])

  return (
    <div className={s.root}>
      <Container>
        <div
          className={cn(
            'mb-6 mt-20 mb-32 flex flex-col items-start justify-between md:mb-0 md:mt-0 md:mb-0 md:flex-row md:items-center',
            s.content,
          )}
        >
          <div className="flex-grow md:w-6/12">
            <h2 className="relative mb-6 text-6xl font-bold">
              <motion.h2
                className={cn('fake-big', s.fakeBig)}
                style={{ y: yPosAnim, scale: scaleAnim }}
              >
                About
              </motion.h2>
              About
            </h2>
            <p className="font-lighter md:text-default text-sm text-secondary">
              I am a frontend developer with more than 3 years of experience in
              ReactJS, NextJS, NodeJS and TypeScript. Hands-on experience in
              Angular, Tailwind CSS, Redux, Flux, MySQL, and MongoDB.
              Experienced in developing heavy-frontend application architecture
              for medium to large applications in e-commerce, healthcare, and
              mortgage broker domains. Strong analytical and optimization skills
              in frontend technologies, with a focus on building scalable and
              robust applications.
            </p>
          </div>
          <div className=" w-6/12 flex-grow lg:block">
            {/* <SkillsAnimation /> */}
            {/* <AboutAnimation /> */}
            {/* <AnimatedCircle /> */}
            {/* <Main /> */}
            {/* <ParentPage /> */}
            {/* <Dotts /> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
