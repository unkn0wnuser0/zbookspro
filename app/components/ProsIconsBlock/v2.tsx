'use client'

import './prosicons.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function ProsIcons_v2({
  data,
}: {
  data: Content.ProsIconsBlockSliceVariation2
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const title = wrapper.current?.querySelector('.prosicons__title')
    const description = wrapper.current?.querySelector(
      '.prosicons__description'
    )

    const pointsIcons = wrapper.current?.querySelectorAll(
      '.prosicons__point__icon__wrapper'
    )!
    const pointsTitles = wrapper.current?.querySelectorAll(
      '.prosicons__point__title'
    )!
    const pointsDescriptions = wrapper.current?.querySelectorAll(
      '.prosicons__point__description'
    )!

    timeline.from(
      [title, description],
      {
        autoAlpha: 0,
        yPercent: 15,
        duration: 0.35,
        stagger: {
          amount: 0.35,
        },
      },
      '>'
    )

    timeline.from(pointsIcons, {
      autoAlpha: 0,
      scale: 0.75,
      yoyo: true,
      duration: 0.35,
      stagger: {
        amount: 0.35,
      },
    })

    timeline.from(
      pointsTitles,
      {
        autoAlpha: 0,
        duration: 0.35,
        stagger: {
          amount: 0.35,
        },
      },
      '>-0.35'
    )

    timeline.from(
      pointsDescriptions,
      {
        autoAlpha: 0,
        yPercent: 10,
        duration: 0.35,
        stagger: {
          amount: 0.35,
        },
      },
      '>-0.35'
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
    <div className='prosicons'>
      <div className='prosicons__wrapper' ref={wrapper}>
        <div className='prosicons__title__wrapper'>
          <div className='prosicons__title' style={{ visibility: 'hidden' }}>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div
            className='prosicons__description'
            style={{ visibility: 'hidden' }}
          >
            <PrismicRichText field={data.primary.description} />
          </div>
        </div>
        <div className='prosicons__points__wrapper v2'>
          {data.items.map((element, index) => {
            return (
              <div className='prosicons__point__wrapper' key={index}>
                <figure
                  className='prosicons__point__icon__wrapper v2'
                  style={{ visibility: 'hidden' }}
                >
                  <PrismicNextImage
                    className='prosicons__point__icon'
                    field={element.icon}
                    alt=''
                    priority
                  />
                </figure>
                <div className='prosicons__point__content__wrapper'>
                  <div
                    className='prosicons__point__title'
                    style={{ visibility: 'hidden' }}
                  >
                    {/* <PrismicRichText field={element.title} /> */}
                  </div>
                  <div
                    className='prosicons__point__description'
                    style={{ visibility: 'hidden' }}
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
