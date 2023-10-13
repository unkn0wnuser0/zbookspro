'use client'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import GSAP from 'gsap'

import './styles.scss'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'

export default function CallToAction({
  data,
  variation,
}: {
  data: Content.CallToActionSlice
  variation?: string
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const image = wrapper.current?.querySelector('.cta__image__wrapper')!
    const title = wrapper.current?.querySelector('.cta__content__title')
    const paragraphs = wrapper.current?.querySelector(
      '.cta__content__paragraphs'
    )
    const button = wrapper.current?.querySelector('.cta__button')

    timeline.from(wrapper.current, {
      autoAlpha: 0,
      yPercent: 15,
      duration: 0.5,
      ease: 'power3.out',
    })

    timeline.from(
      [image, title, paragraphs, button],
      {
        autoAlpha: 0,
        duration: 0.25,
        ease: 'power3.out',
        stagger: {
          amount: 0.75,
        },
      },
      '>-0.25'
    )
  }

  useEffect(() => {
    createObserver({
      element: wrapper.current,
      animationIn: animateIn,
      rootMargin: '-15% 0% -15% 0%',
      threshold: 0.35,
      freeze: true,
    })
  }, [])

  return (
    <div className='cta'>
      <div
        className='cta__wrapper'
        id={variation}
        ref={wrapper}
        style={{ visibility: 'hidden' }}
      >
        <figure
          className='cta__image__wrapper'
          style={{ visibility: 'hidden' }}
        >
          <PrismicNextImage field={data.primary.image} alt='' priority />{' '}
        </figure>
        <div className='cta__content__wrapper'>
          {data.primary.title[0]?.spans.length > 0 && (
            <div
              className='cta__content__title'
              style={{ visibility: 'hidden' }}
            >
              <PrismicRichText field={data.primary.title} />
            </div>
          )}

          <div
            className='cta__content__paragraphs'
            style={{ visibility: 'hidden' }}
          >
            <PrismicRichText field={data.primary.paragraphs} />
          </div>
          {data.primary.button_caption && (
            <button className='cta__button' style={{ visibility: 'hidden' }}>
              {data.primary.button_caption}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
