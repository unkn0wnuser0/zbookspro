'use client'

import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import './styles.scss'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function Logos({ data }: { data: Content.LogosSlice }) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const title = wrapper.current?.querySelector('.logos__title')
    const logos = wrapper.current?.querySelectorAll('.logos__icon__card')!

    timeline.from([title, ...logos], {
      autoAlpha: 0,
      duration: 0.25,
      ease: 'power3.out',
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
    <div className='logos'>
      <div className='logos__wrapper' ref={wrapper} id='logos-anchor'>
        <div className='logos__title' style={{ visibility: 'hidden' }}>
          <PrismicRichText field={data.primary.title} />
        </div>
        <div className='logos__icons__wrapper'>
          {data.items.map((element, index) => {
            return (
              <PrismicNextLink
                className='logos__icon__card'
                field={element.link}
                key={index}
                style={{ cursor: 'pointer', visibility: 'hidden' }}
              >
                <figure className='logos__icon__wrapper'>
                  <PrismicNextImage field={element.logo} alt='' priority />
                </figure>
              </PrismicNextLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}
