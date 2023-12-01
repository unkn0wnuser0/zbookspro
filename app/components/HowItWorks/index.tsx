'use client'

import './howitworks.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function HowItWorks({
  data,
  animated,
}: {
  data: Content.HowItWorksSlice
  animated?: boolean
}) {
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const steps = wrapper.current?.querySelectorAll(
      '.howitworks__step__wrapper'
    )

    steps?.forEach((element: Element) => {
      const image = element.querySelector('figure')!
      const title = element.querySelector('.howitworks__step__point')!
      const paragraphs = element.querySelector(
        '.howitworks__step__description'
      )!

      const animateIn = () => {
        GSAP.from(image, {
          autoAlpha: 0,
          scale: 0.75,
          duration: 0.5,
        })

        GSAP.from([title, paragraphs], {
          autoAlpha: 0,
          yPercent: 15,
          duration: 0.5,
          stagger: {
            amount: 0.25,
          },
        })
      }

      if (!animated) return

      createObserver({
        element: element as HTMLDivElement,
        animationIn: animateIn,
        rootMargin: '-15% 0% -15% 0%',
        threshold: 0.35,
        freeze: true,
      })
    })
  }, [])

  return (
    <div className='howitworks'>
      <div className='howitworks__wrapper' id='howitworks-anchor' ref={wrapper}>
        <div className='howitworks__title'>
          <PrismicRichText field={data.primary.title} />
        </div>
        <div className='howitworks__steps__wrapper'>
          {data.items.map((element, index) => {
            return (
              <div className='howitworks__step__wrapper' key={index}>
                <figure
                  className='howitworks__step__icon__wrapper'
                  style={{ visibility: animated ? 'hidden' : 'visible' }}
                >
                  <PrismicNextImage
                    className='howitworks__step__icon'
                    field={element.image}
                    alt=''
                    priority
                  />
                </figure>
                <div className='howitworks__step__content__wrapper'>
                  <div
                    className='howitworks__step__point'
                    style={{ visibility: animated ? 'hidden' : 'visible' }}
                  >
                    <PrismicRichText field={element.point} />
                  </div>
                  <div
                    className='howitworks__step__description'
                    style={{ visibility: animated ? 'hidden' : 'visible' }}
                  >
                    <PrismicRichText field={element.description} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
