'use client'

import React, { RefObject, forwardRef, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'

type Children = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

interface Scroll {
  ease: number
  current: number
  previous: number
  rounded: number
}

const scroll = {
  ease: 0.02,
  current: 0,
  previous: 0,
  rounded: 0,
  height: 0,
} as Scroll

export default function ScrollContainer({ children }: Children) {
  const wrapper = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  const scrollReff = useRef()

  const scrollY = (wrapper: RefObject<HTMLDivElement>) => {
    scroll.current = window.scrollY
    scroll.previous += (scroll.current - scroll.previous) * scroll.ease
    scroll.rounded = (Math.round(scroll.previous) * 100) / 100

    const delta = scroll.current - scroll.rounded
    const acceleration = delta / window.innerWidth
    const speed = +acceleration
    const skew = speed * 7.5

    if (!wrapper.current) return
    wrapper.current!.style.transform = `translateY(-${scroll.rounded}px)`
  }

  const animate = () => {
    frame.current = requestAnimationFrame(animate)
    scrollY(wrapper)
  }

  const logging = () => {
    console.log('logging')
  }

  useEffect(() => {
    frame.current = requestAnimationFrame(animate)

    return () => {
      // wrapper.current!.style.transform = `translateY(-${0}px)`
      cancelAnimationFrame(frame.current)
    }
  }, [])

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
          // scroll.height = cr.height
        }
      })

      resizeObserver.observe(wrapper.current!)
    }

    setWrapperHeight()
  }, [])

  return (
    <div className='App'>
      <div className='app__wrapper' ref={wrapper}>
        <AnimatePresence mode='wait'>
          {children}
          {/* {React.Children.map(children, (child) =>
            React.cloneElement(child, { logging: logging })
          )} */}
        </AnimatePresence>
      </div>
    </div>
  )
}
