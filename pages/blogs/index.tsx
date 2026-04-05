import GraphicAnim from '@common/GraphicAnim/GraphicAnim'
import PageWrapper from '@common/PageWrapper'
import React, { ReactElement, useState } from 'react'
import GraphicPage from '../../components/common/GraphicPage/GraphicPage'
import ReactFluidScroll from 'react-fluid-scroll'
import PageTitle from '@common/PageTitle'
import { colors } from '@utils/index'
import { motion } from 'framer-motion'
import { blogs, getTagColor } from '@components/blogs/data'

const des = `I have contributed in various field. The medias are -`

const sites = [
  'Medium',
  'Stackoverflow',
  'freecodecamp',
  'dev.to',
  'youtube',
  'quora',
  'Chrome Extensions',
  'Github',
  'Linkedn',
  'Facebook',
  'Leetcode',
]

const variants = {
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const child = {
  init: {
    opacity: 0,
    x: -50,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
    },
  },
}

const BlogPage = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <PageWrapper title="Blog" description={des} items={sites}>
      <>
        <PageTitle title="Blog" description={''} items={sites} />
        <motion.div
          className="mt-10 flex flex-col items-start pb-12 lg:mt-20"
          variants={variants}
          initial="init"
          animate="enter"
          exit="exit"
        >
          {blogs.map((blog, i) => (
            <motion.a
              href={blog.link}
              target="_blank"
              rel="noreferrer noopender"
              className={'mb-12 lg:w-3/4' + (i % 2 === 1 ? ' ml-auto' : '')}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              variants={child}
              initial={{
                x: -100,
              }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              key={i}
            >
              <div className="mr-auto grid grid-cols-4 flex-col-reverse justify-between p-4 shadow-lg transition-transform duration-300 hover:scale-[1.01] lg:flex-row lg:p-8">
                <div className="lg:mr-12 col-span-3">
                  <span
                    className="mb-2 mr-2 rounded px-2 py-1 text-[.55rem] font-bold"
                    style={{
                      color: 'white',
                      background: getTagColor(blog.platform),
                    }}
                  >
                    {blog.platform}
                  </span>
                  <h4 className="mb-2 text-lg font-semibold">
                    {blog.title}
                  </h4>
                  <p className="line-clamp-3 three-line mb-4 text-sm text-accent-4">
                    {blog.description}
                  </p>
                  <div className="flex items-center">
                    <span className="mr-4 mb-2 text-sm font-bold">
                      Topics:{' '}
                    </span>
                    <div className="flex flex-wrap">
                      {blog.topics.map((topic) => (
                        <span
                          className="mb-2 mr-2 block rounded px-2 py-1 text-[.55rem] font-bold border"

                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={blog.image}
                    alt=""
                    className="min-w-content mb-4 block object-contain  lg:mb-0 lg:w-96 col-span-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </>
    </PageWrapper>
  )
}

export default BlogPage
