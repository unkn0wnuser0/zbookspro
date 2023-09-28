'use client'

import { useEffect, useState, useRef } from 'react'
import GSAP from 'gsap'

import useRender from '../../hooks/useRender'
// const speed = 0.0002

const isBrowser = () => typeof window !== 'undefined'

function Cursor(props: { speed: number }) {
  const { speed } = props
  const delta = 1.0 - Math.pow(1.0 - speed, 1)
  const deltaDot = 1.0 - Math.pow(1.0 - 0.5, 0.2)

  const cursor: any = useRef()
  const dot: any = useRef()

  const xSet = GSAP.quickSetter(cursor.current, 'x', 'px')
  const ySet = GSAP.quickSetter(cursor.current, 'y', 'px')

  const xSetDot = GSAP.quickSetter(dot.current, 'x', 'px')
  const ySetDot = GSAP.quickSetter(dot.current, 'y', 'px')

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [cursorPosition, setCursorPosition] = useState(
    isBrowser() && {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
  )

  const [dotPosition, setDotPosition] = useState(
    isBrowser() && {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
  )

  useRender()

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setMousePosition({
        x: event.x,
        y: event.y,
      })
    })

    GSAP.set([cursor.current, dot.current], {
      xPercent: -50,
      yPercent: -50,
    })

    setDotPosition({ x: cursorPosition.x, y: cursorPosition.y })
    setMousePosition({ x: cursorPosition.x, y: cursorPosition.y })
  }, [])

  const moveCursor = () => {
    cursorPosition.x += (mousePosition.x - cursorPosition.x) * delta
    cursorPosition.y += (mousePosition.y - cursorPosition.y) * delta

    xSet(cursorPosition.x)
    ySet(cursorPosition.y)

    dotPosition.x += (mousePosition.x - dotPosition.x) * deltaDot
    dotPosition.y += (mousePosition.y - dotPosition.y) * deltaDot

    xSetDot(dotPosition.x)
    ySetDot(dotPosition.y)
  }

  useEffect(() => {
    moveCursor()
  })

  return (
    <div className='cursor'>
      <div className='custom__cursor' ref={cursor}></div>
      <div className='custom__cursor__dot' ref={dot}></div>
    </div>
  )
}

export default Cursor
