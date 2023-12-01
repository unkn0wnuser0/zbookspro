'use client'

import './herobanner.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import GSAP from 'gsap'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'

export default function HeroBanner({
  data,
  animated,
}: {
  data: Content.HeroBannerSlice
  animated?: boolean
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const title = wrapper.current?.querySelector('.herobanner__title')
    const paragraphs = wrapper.current?.querySelector('.herobanner__paragraphs')
    const button = wrapper.current?.querySelector('.herobanner__button')
    const image = wrapper.current?.querySelector('.herobanner__image__wrapper')

    timeline.from(
      [image, title, paragraphs, button],
      {
        autoAlpha: 0,
        yPercent: -15,
        duration: 0.5,
        stagger: {
          amount: 0.5,
        },
      },
      '>'
    )
  }

  useEffect(() => {
    if (!animated) return

    animateIn()
    // createObserver({
    //   element: wrapper.current,
    //   animationIn: animateIn,
    //   rootMargin: '-15% 0% -15% 0%',
    //   freeze: true,
    // })
  }, [])

  return (
    <div className='herobanner' ref={wrapper}>
      <div className='herobanner__wrapper'>
        <div className='herobanner__content__wrapper'>
          <div
            className='herobanner__title'
            style={{ visibility: animated ? 'hidden' : 'visible' }}
          >
            <PrismicRichText field={data.primary.title} />
          </div>
          <div
            className='herobanner__paragraphs'
            style={{ visibility: animated ? 'hidden' : 'visible' }}
          >
            <PrismicRichText field={data.primary.paragraphs} />
          </div>
          <button
            className='herobanner__button'
            style={{ visibility: animated ? 'hidden' : 'visible' }}
          >
            {data.primary.button_caption}
          </button>
        </div>
        <figure
          className='herobanner__image__wrapper'
          style={{ visibility: animated ? 'hidden' : 'visible' }}
        >
          <PrismicNextImage
            className='herobanner__image'
            field={data.primary.image}
            alt=''
            priority
          />
        </figure>
      </div>
    </div>
  )
}
