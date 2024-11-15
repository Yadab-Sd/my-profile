import Container from '@common/Container'
import React, { useEffect } from 'react'
import s from './About.module.css'
import cn from 'classnames'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { HashObstacles, SkillsAnimation } from '@components/UI'
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
            'mb-6 mt-8 lg:mt-12 mb-20 lg:mb-32 flex flex-col items-start justify-between md:mb-0 md:mt-0 md:mb-0 md:flex-row md:items-center',
            s.content,
          )}
        >
          <div className="flex-grow lg:w-6/12">
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
              I am a software engineer with more than 4 years of experience in
              Java, NodeJS, JavaScript, AWS, SQL and No-SQL. Hands-on experience
              in Spring, TypeScript, ReactJS, NextJS, Angular, Express, GraphQL, Tailwind
              CSS, Redux, Flux, HTML and CSS. Experienced in developing
              heavy-frontend and high performant backend application architecture for medium to large
              applications in e-commerce, healthcare, mortgage broker and digital media
              domains. Strong analytical and optimization skills in full-stack
              technologies, with a focus on building scalable and robust
              applications.
            </p>
          </div>
          <div className="lg:w-6/12 flex-grow lg:flex justify-center lg:justify-end">
            {/* <div className="w-96">
              <HashObstacles />
            </div> */}
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
