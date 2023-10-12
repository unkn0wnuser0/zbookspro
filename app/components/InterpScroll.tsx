'use client'

import React, { RefObject, use, useEffect, useRef, useState } from 'react'
import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts'
import GSAP from 'gsap'
import { usePathname } from 'next/navigation'

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

interface WindowSize {
  width: number
  height: number
  wrapperHeight: number
  wrapperWidth: number
}

const scroll = {
  min: 0,
  limit: 0,
  current: 0,
  target: 0,
  lerp: 0.025,
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
  const pathname = usePathname()

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    wrapperHeight: 0,
    wrapperWidth: 0,
  })

  const [anchors, setAnchors] = useState<NodeListOf<Element>>([])

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      wrapperHeight: document.body.offsetHeight,
      wrapperWidth: document.body.offsetWidth,
    })

    if (window.innerWidth < 540) {
      scroll.lerp = 0.1
    }
  }

  const handleWheel = (e: WheelEvent) => {
    scroll.target += e.deltaY
  }

  const onTouchDown = (e: TouchEvent) => {
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

    scroll.mDistance = (scroll.mStartPosition - y) * 2.5

    scroll.target = scroll.mCurrentPosition + scroll.mDistance
  }

  useEventListener('resize', handleSize)
  useEventListener('wheel', handleWheel, wrapper)
  useEventListener('touchstart', onTouchDown)
  useEventListener('touchend', onTouchUp)
  useEventListener('touchmove', onTouchMove)

  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])

  const calculateScroll = () => {
    // if (scrollDisabled.current) return

    scroll.target = GSAP.utils.clamp(0, scroll.limit, scroll.target)

    scroll.current = GSAP.utils.interpolate(
      scroll.current,
      scroll.target,
      scroll.lerp
    )

    if (scroll.current < 1) scroll.current = 0
  }

  const scrollY = (wrapper: RefObject<HTMLDivElement>) => {
    if (!wrapper.current) return
    calculateScroll()

    wrapper.current!.style.transform = `translateY(${-scroll.current}px)`
  }

  const animate = () => {
    frame.current = requestAnimationFrame(animate)

    scrollY(wrapper)
  }

  useEffect(() => {
    frame.current = requestAnimationFrame(animate)

    const anchorsDivs = document.querySelectorAll('#anchor')
    setAnchors(anchorsDivs)

    return () => {
      cancelAnimationFrame(frame.current)
      document.body.style.height = '0px'
      scroll.current = 0
      scroll.target = 0
      scroll.limit = 0
      scroll.min = 0
    }
  }, [pathname])

  const scrollToAnchor = (element: Element) => {
    const targetDivName = element.getAttribute('data-target')!
    const targetDiv = document.getElementById(targetDivName)!
    const targetY = targetDiv.getBoundingClientRect().top
    const delta = targetY + scroll.current

    scroll.target = targetY
    scroll.current = scroll.target

    // scroll.target += delta - scroll.current
    // scroll.current = scroll.target
  }

  useEffect(() => {
    anchors.forEach((element) => {
      element.addEventListener('click', () => {
        scrollToAnchor(element)
      })
    })

    return () => {
      anchors.forEach((element) => {
        element.addEventListener('click', () => {
          scrollToAnchor(element)
        })
      })
    }
  }, [anchors])

  useEffect(() => {
    const setWrapperHeight = () => {
      if (wrapper.current) {
        document.body.style.height = `${
          wrapper.current!.getBoundingClientRect().height
        }px`
      }

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const cr = entry.contentRect
          document.body.style.height = `${cr.height}px`
          scroll.limit = cr.height - window.innerHeight
        }
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
