import React, { ReactElement, useEffect, useRef } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import { useRouter } from 'next/router'

const SmoothScroll = ({ children }: { children: ReactElement }) => {
  const windowSize = useWindowSize()
  const scrollingContainerRef: any = useRef()
  const router = useRouter()
  const isFreeScrollRouter = router.pathname?.startsWith('/blogs/')

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  useEffect(() => {
    // For free scroll pages (blog details), reset body styles and skip height manipulation
    if (isFreeScrollRouter) {
      document.body.style.height = 'auto'
      document.body.style.overflowY = 'auto'
      return
    }

    setBodyHeight()
  }, [windowSize?.height, isFreeScrollRouter])

  useEffect(() => {
    // Skip smooth scroll setup for blog detail pages
    if (isFreeScrollRouter) {
      document.body.style.height = 'auto'
      document.body.style.overflowY = 'auto'
      return
    }

    // Multiple recalculations to catch content as it loads
    const timers = [
      setTimeout(() => setBodyHeight(), 100),
      setTimeout(() => setBodyHeight(), 300),
      setTimeout(() => setBodyHeight(), 600),
      setTimeout(() => setBodyHeight(), 1000),
      setTimeout(() => setBodyHeight(), 2000),
    ]

    // Watch for content changes and update body height dynamically
    if (!scrollingContainerRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      setBodyHeight()
    })

    resizeObserver.observe(scrollingContainerRef.current)

    // Also recalculate when images finish loading
    const images = scrollingContainerRef.current.querySelectorAll('img')
    images.forEach((img: HTMLImageElement) => {
      if (img.complete) {
        setBodyHeight()
      } else {
        img.addEventListener('load', setBodyHeight)
      }
    })

    return () => {
      timers.forEach(timer => clearTimeout(timer))
      resizeObserver.disconnect()
      images.forEach((img: HTMLImageElement) => {
        img.removeEventListener('load', setBodyHeight)
      })
    }
  }, [isFreeScrollRouter])

  const setBodyHeight = () => {
    if (!scrollingContainerRef.current) return

    const element = scrollingContainerRef.current
    const height = element.getBoundingClientRect().height
    const scrollHeight = element.scrollHeight
    const offsetHeight = element.offsetHeight

    // Use the largest value to ensure all content is scrollable
    const finalHeight = Math.max(height, scrollHeight, offsetHeight)

    if (finalHeight > 0) {
      document.body.style.height = `${finalHeight}px`
    }
  }

  const smoothScrollingHandler = () => {
    // Skip smooth scroll effect for blog detail pages
    if (isFreeScrollRouter) {
      return
    }

    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`
    }

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler())
  }

  useEffect(() => {
    if (!isFreeScrollRouter) {
      requestAnimationFrame(() => smoothScrollingHandler())
    }
  }, [isFreeScrollRouter])

  return (
    <div
      className={
        isFreeScrollRouter ? 'parent-scroller-free' : 'parent-scroller'
      }
    >
      <div
        ref={scrollingContainerRef}
        id={!isFreeScrollRouter ? 'scId' : undefined}
      >
        {children}
      </div>
    </div>
  )
}

export default SmoothScroll
