'use client'

import './experience.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function Experience({
  data,
}: {
  data: Content.ExperienceBlockSlice
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const title = wrapper.current?.querySelector('.experience__title')
    const points = Array.from(
      wrapper.current?.querySelectorAll('.experience__point__wrapper')!
    )

    timeline.from([title, ...points], {
      autoAlpha: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: {
        amount: 0.5,
      },
    })
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
    <div className='experience'>
      <div className='experience__wrapper' ref={wrapper}>
        <div className='experience__title' style={{ visibility: 'hidden' }}>
          <PrismicRichText field={data.primary.title} />
        </div>
        <div className='experience__points__wrapper'>
          {data.items.map((element, index) => {
            return (
              <div
                className='experience__point__wrapper'
                key={index}
                style={{ visibility: 'hidden' }}
              >
                <figure className='experience__point__image__wrapper'>
                  <PrismicNextImage
                    className='experience__point__image'
                    field={element.image}
                    alt=''
                    priority
                  />
                </figure>
                <div className='experience__content__wrapper'>
                  <div className='experience__point__title'>
                    <PrismicRichText field={element.title} />
                  </div>
                  <div className='experience__description'>
                    <PrismicRichText field={element.description} />
                  </div>
                  <button className='experience__button'>
                    {element.button_caption}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
