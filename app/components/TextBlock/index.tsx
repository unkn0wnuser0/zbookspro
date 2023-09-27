'use client'

import './textblock.scss'

import { Content } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function TextBlock({ data }: { data: Content.TextBlockSlice }) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const title = wrapper.current?.querySelector('.textblock__title')
    const paragraphs = Array.from(
      wrapper.current!.querySelectorAll('.textblock__paragraphs p')
    )

    timeline.from(
      [title, ...paragraphs],
      {
        autoAlpha: 0,
        yPercent: -25,
        duration: 0.5,
        stagger: {
          amount: 0.5,
        },
      },
      '>'
    )
  }

  useEffect(() => {
    createObserver({
      element: wrapper.current,
      animationIn: animateIn,
      rootMargin: '-40% 0% -40% 0%',
      freeze: true,
    })
  }, [])

  return (
    <div className='textblock'>
      <div className='textblock__wrapper' ref={wrapper}>
        <div className='textblock__title' style={{ visibility: 'hidden' }}>
          <PrismicRichText field={data.primary.title} />
        </div>
        <div className='textblock__paragraphs'>
          <PrismicRichText field={data.primary.paragraphs} />
        </div>
      </div>
    </div>
  )
}
