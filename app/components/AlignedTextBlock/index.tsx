'use client'

import './alignedtextblock.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function AlignedTextBlock({
  data,
  animated,
}: {
  data: Content.AlignedTextBlockSlice
  animated?: boolean
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const title = wrapper.current?.querySelector('.textblock__aligned__title')
    const paragraphs = wrapper.current?.querySelectorAll(
      '.textblock__aligned__paragraphs p'
    )
    const image = wrapper.current?.querySelector(
      '.textblock__aligned__image__wrapper'
    )!

    timeline.from(
      [title, paragraphs],
      {
        autoAlpha: 0,
        yPercent: 20,
        duration: 0.75,
        ease: 'power3.out',
        stagger: {
          amount: 0.5,
        },
      },
      '>'
    )

    timeline.from(
      image,
      {
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.75,
        ease: 'power3.out',
      },
      '<'
    )
  }

  useEffect(() => {
    if (!animated) return
    createObserver({
      element: wrapper.current,
      animationIn: animateIn,
      rootMargin: '-15% 0% -15% 0%',
      threshold: 0.35,
      freeze: true,
    })
  }, [])

  return (
    <div className='textblock__aligned'>
      <div className='textblock__aligned__wrapper' ref={wrapper}>
        <div className='textblock__aligned__content__wrapper'>
          <div
            className='textblock__aligned__title'
            style={{ visibility: animated ? 'hidden' : 'visible' }}
          >
            <PrismicRichText field={data.primary.title} />
          </div>
          <div className='textblock__aligned__paragraphs'>
            <PrismicRichText
              field={data.primary.paragraphs}
              components={{
                paragraph: ({ children }) => (
                  <p style={{ visibility: animated ? 'hidden' : 'visible' }}>
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
        <figure
          className='textblock__aligned__image__wrapper'
          style={{ visibility: animated ? 'hidden' : 'visible' }}
        >
          <PrismicNextImage
            className='textblock__aligned__image'
            field={data.primary.image}
            alt=''
            priority
          />
        </figure>
      </div>
    </div>
  )
}
