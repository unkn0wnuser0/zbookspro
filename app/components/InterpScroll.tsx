'use client'

import React, {
  RefObject,
  Suspense,
  use,
  useEffect,
  useRef,
  useState,
} from 'react'
import { AnimatePresence, BoundingBox } from 'framer-motion'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import GSAP from 'gsap'
const NormalizeWheel = require('normalize-wheel')
// import NormalizeWheel from 'normalize-wheel'
import { useRouter, usePathname } from 'next/navigation'
import _ from 'lodash'

type Children = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

interface Scroll {
  min: number
  limit: number
  current: number
  target: number
  lerp: number
  paused: boolean
  mTouch: boolean
  mCurrentPosition: number
  mStartPosition: number
  mDistance: number
}

const scroll = {
  min: 0,
  limit: 0,
  current: 0,
  target: 0,
  lerp: 0.175,
  paused: false,
  mTouch: false,
  mCurrentPosition: 0,
  mStartPosition: 0,
  mDistance: 0,
} as Scroll

export default function InterpolationScroll({ children }: Children) {
  const wrapper = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  const scrollDisabled = useRef(false)
  const router = useRouter()
  const pathname = usePathname()
  const [listeners, setListeners] = useState(false)
  const [scheduledFrame, setScheduledFrame] = useState(false)

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    wrapperHeight: 0,
    wrapperWidth: 0,
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      wrapperHeight: document.body.offsetHeight,
      wrapperWidth: document.body.offsetWidth,
    })

    if (window.innerWidth < 540) {
      scroll.lerp = 0.095
    }
  }

  const handleWheel = (e: WheelEvent) => {
    setScheduledFrame(true)

    const { pixelY } = NormalizeWheel(e)
    scroll.target += pixelY
  }

  const onTouchDown = (e: TouchEvent) => {
    setScheduledFrame(true)
    scroll.mTouch = true

    scroll.mCurrentPosition = scroll.current
    scroll.mStartPosition = e.touches[0].clientY
  }

  const onTouchUp = (e: TouchEvent) => {
    scroll.mTouch = false
  }

  const onTouchMove = (e: TouchEvent) => {
    scroll.mTouch = true

    const y = e.touches[0].clientY

    scroll.mDistance = (scroll.mStartPosition - y) * 3.25

    scroll.target = scroll.mCurrentPosition + scroll.mDistance
  }

  useEffect(() => {
    document.addEventListener('resize', handleSize, { passive: true })
    wrapper.current!.addEventListener('wheel', handleWheel, { passive: true })
    document.addEventListener('touchstart', onTouchDown, { passive: true })
    document.addEventListener('touchend', onTouchUp, { passive: true })
    document.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      document.removeEventListener('resize', handleSize)
      document.removeEventListener('touchstart', onTouchDown)
      document.removeEventListener('touchend', onTouchUp)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  const calculateScroll = () => {
    scroll.target = GSAP.utils.clamp(0, scroll.limit, scroll.target)

    scroll.current = GSAP.utils.interpolate(
      scroll.current,
      scroll.target,
      scroll.lerp
    )

    if (scroll.current < 0.025) scroll.current = 0
  }

  const scrollY = (wrapper: RefObject<HTMLDivElement>) => {
    if (!wrapper.current) return
    calculateScroll()

    wrapper.current!.style.transform = `translateY(${-scroll.current}px)`
  }

  const animate = () => {
    scrollY(wrapper)
    frame.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (!scheduledFrame) return

    frame.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame.current)
      document.body.style.height = '0px'
      scroll.current = 0
      scroll.target = 0
    }
  }, [scheduledFrame])

  useEffect(() => {
    scroll.current = 0
    scroll.target = 0
  }, [router])

  const scrollTo = (element: Element) => {
    const targetDivName = element.getAttribute('data-target')!
    const headerHeight = document
      .querySelector('.header')!
      .getBoundingClientRect().height

    const offset = headerHeight * 2
    const targetDiv = document.getElementById(targetDivName)!
    const targetY = targetDiv.getBoundingClientRect().top
    const delta = targetY + scroll.current
    scroll.target = scroll.target
    scroll.target = targetY + scroll.current - offset
    scroll.current = scroll.target
    console.log(offset)
  }

  const removeEventListeners = () => {
    const anchors = document.querySelectorAll('#anchor')
    const resetPrompts = document.querySelectorAll('#scroll-reset')

    anchors.forEach((element) => {
      element.removeEventListener('click', () => {
        scrollTo(element)
      })
    })

    resetPrompts.forEach((element) => {
      element.removeEventListener('click', () => {
        scroll.current = 0
        scroll.target = 0
      })
    })
  }

  const addEventListeners = () => {
    removeEventListeners()
    if (listeners) return

    const anchors = document.querySelectorAll('#anchor')
    console.log(anchors)

    anchors.forEach((element) => {
      element.addEventListener('click', () => {
        setScheduledFrame(true)
        scrollTo(element)
      })
    })

    const resetPrompts = document.querySelectorAll('#scroll-reset')

    resetPrompts.forEach((element) => {
      element.addEventListener('click', () => {
        scroll.current = 0
        scroll.target = 0
      })
    })

    setListeners(true)
  }

  // useEffect(() => {
  //   removeEventListeners()
  // }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      addEventListeners()
    }, 250)
  }, [listeners])

  useEffect(() => {
    const setWrapperHeight = () => {
      if (wrapper.current) {
        // document.body.style.height = `${
        //   wrapper.current!.getBoundingClientRect().height
        // }px`
      }

      const detectHeight = _.throttle((entries) => {
        entries.forEach((entry: ResizeObserverEntry) => {
          const cr = entry.contentRect
          // document.body.style.height = `${cr.height}px`
          scroll.limit = cr.height - window.innerHeight
        })
      }, 250)

      const resizeObserver = new ResizeObserver((entries) => {
        detectHeight(entries)
      })

      resizeObserver.observe(wrapper.current!)
    }

    setWrapperHeight()
  }, [])

  return (
    <div className='App'>
      <div className='app__wrapper' ref={wrapper}>
        {/* <AnimatePresence mode='wait'> */}
        {children}
        {/* {React.Children.map(children, (child) =>
            React.cloneElement(child, { logging: logging })
          )} */}
        {/* </AnimatePresence> */}
      </div>
    </div>
  )
}
