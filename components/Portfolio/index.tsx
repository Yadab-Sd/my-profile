import Container from '@common/Container'
import React from 'react'
import s from './Portfolio.module.css'
import cn from 'classnames'
import {
  useMotionValue,
  useTransform,
  motion,
  useViewportScroll,
} from 'framer-motion'
import { ParallaxImage } from '@components/UI'
import { Card } from './Card'
import { useRouter } from 'next/router'
import ProjectCard from './ProjectCard'
import { transition } from '@utils/index'
import Link from 'next/link'

const cardData: any[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: 'c',
    category: 'Pizza',
    title: '5 Food Apps Delivering the Best of Your City',
    pointOfInterest: 80,
    backgroundColor: '#814A0E',
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: 'f',
    category: 'How to',
    title: 'Arrange Your Apple Devices for the Gram',
    pointOfInterest: 120,
    backgroundColor: '#959684',
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: 'a',
    category: 'Pedal Power',
    title: 'Map Apps for the Superior Mode of Transport',
    pointOfInterest: 260,
    backgroundColor: '#5DBCD2',
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: 'g',
    category: 'Holidays',
    title: 'Our Pick of Apps to Help You Escape From Apps',
    pointOfInterest: 200,
    backgroundColor: '#8F986D',
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: 'd',
    category: 'Photography',
    title: 'The Latest Ultra-Specific Photography Editing Apps',
    pointOfInterest: 150,
    backgroundColor: '#FA6779',
  },
  // Photo by Siora Photography on Unsplash
  {
    id: 'h',
    category: "They're all the same",
    title: '100 Cupcake Apps for the Cupcake Connoisseur',
    pointOfInterest: 60,
    backgroundColor: '#282F49',
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: 'e',
    category: 'Cats',
    title: 'Yes, They Are Sociopaths',
    pointOfInterest: 200,
    backgroundColor: '#AC7441',
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: 'b',
    category: 'Holidays',
    title: 'Seriously the Only Escape is the Stratosphere',
    pointOfInterest: 260,
    backgroundColor: '#CC555B',
  },
]

const projects = [
  {
    id: 1,
    url: '/projects/qcoom.svg',
    name: 'Qcoom',
    tech: ['NextJS', 'JavaScript', 'TailwindCss'],
    link: 'https://qcoom.com/',
  },
  {
    id: 2,
    url: '/projects/dhamaka.svg',
    name: 'Dhamaka',
    tech: ['NextJs', 'GraphQl', 'TailwindCss'],
    link: 'https://dhamakashopping.com/',
  },
  {
    id: 3,
    url: '/projects/jachai.svg',
    name: 'Jachai',
    tech: ['NextJs', 'TailwindCss'],
    link: 'https://jachai.com/',
  },
  // {
  //   id: 4,
  //   url: "/projects/invtech.png",
  //   name: "InvTech",
  //   tech: ["Ruby", "JQuery", "Bootstrap"],
  //   link: "https://jachai.com/",
  // },
  {
    id: 1,
    url: '/projects/invariant.png',
    name: 'Invariant',
    tech: ['Jekyll', 'JQuery', 'Bootstrap'],
    link: 'https://invarianttele.com/',
  },
  {
    id: 5,
    url: '/projects/jcrider.png',
    name: 'JC Ride',
    tech: ['ReactJs', 'AntD', 'MaterialUI'],
    link: 'https://jachai-rider.com/',
  },
]

const scales = [0.9, 1, 1.1, 1, 0.9]
const delays = [0.9, 1, 1.1, 1, 0.9]

function Portfolio() {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
  const { scrollYProgress } = useViewportScroll()
  const router = useRouter()
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -80])

  return (
    <div className={s.root}>
      <Container>
        <div className={cn('items-center justify-between', s.content)}>
          <div className="">
            <h2 className="mb-12 text-6xl font-bold">
              {' '}
              <motion.h2
                className={cn('fake-big', s.fakeBig)}
                style={{ y: yPosAnim, scale: scaleAnim }}
              >
                Portfolio
              </motion.h2>
              Portfolio
            </h2>
            <motion.div
              className="md:flex"
              // animate={{
              //   transition: { staggerChildren: 0.1 }
              // }}
            >
              {projects.map((project, i) => (
                <motion.div
                  className={cn('p-card-container', s.pCard)}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: scales[i] }}
                  transition={{ duration: 0.5, delay: 0.3 / scales[i] }}
                  viewport={{ once: true }}
                >
                  <ProjectCard data={project} />
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-20 text-center">
              <Link href="/portfolio">
                <a className="font-bold text-lg">View More</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Portfolio
