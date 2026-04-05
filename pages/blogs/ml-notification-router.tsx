import GraphicAnim from '@common/GraphicAnim/GraphicAnim'
import PageWrapper from '@common/PageWrapper'
import React, { ReactElement, useState } from 'react'
import GraphicPage from '../../components/common/GraphicPage/GraphicPage'
import ReactFluidScroll from 'react-fluid-scroll'
import PageTitle from '@common/PageTitle'
import { colors } from '@utils/index'
import { motion } from 'framer-motion'
import { blogs, getTagColor } from '@components/blogs/data'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import NotificationBlogContent from '@components/blogs/NotificationBlogContent'

const BlogPage = () => {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()
  const post = blogs.find((blog) => blog.link === router.pathname)
  return (
    <>
      <Head>
        <title>{post?.title} | Blog by Yadab Sutradhar</title>
        <meta name="description" content={post?.description} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.description} />
        <meta property="og:image" content={post?.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.description} />
        <meta name="twitter:image" content={post?.image} />
        <link rel="canonical" href={`https://yadab.info/${post?.link}`} />
      </Head>
      {/* <PageWrapper title={'Blog'} description={''} items={[]}>
        <PageTitle title={post?.title || 'Blog'} description={''} items={[]} /> */}
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <Link href="/blogs">
              <a className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blogs
              </a>
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {post?.title}
            </h1>

            <div className="flex items-center space-x-4 text-blue-100">
              <Image
                src="/yadab-ava.jpg"
                alt="Yadab Sutradhar"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">Yadab Sutradhar</p>
              </div>
              <span className="text-blue-200">•</span>
              <p className="text-sm">Software Engineer</p>
              <span className="text-blue-200">•</span>
              <time className="text-sm">
                {new Date('2026-04-05').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {post?.topics?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-500/30 backdrop-blur-sm text-white text-sm rounded-full border border-blue-400/30"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <NotificationBlogContent />
        </div>
      </article>
      {/* </PageWrapper> */}
    </>
  )
}

export default BlogPage
