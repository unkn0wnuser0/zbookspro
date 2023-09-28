'use client'

import './proslist.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export const revalidate = 0

export default function ProsList({
  data,
}: {
  data: Content.ProsListBlockSlice
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const title = wrapper.current?.querySelector('.proslist__title')
    const paragraphs = wrapper.current?.querySelector('.proslist__paragraphs')

    const points = Array.from(
      wrapper.current?.querySelectorAll('.proslist__list__point__caption')!
    )
    const pointsIcons = Array.from(
      wrapper.current?.querySelectorAll(
        '.proslist__list__point__icon__wrapper'
      )!
    )

    const image = wrapper.current?.querySelector('.proslist__image__wrapper')!

    timeline.from(
      [title, paragraphs],
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

    timeline.from(
      image,
      {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.5,
      },
      '<'
    )

    timeline.from(
      points,
      {
        xPercent: -5,
        autoAlpha: 0,
        duration: 0.35,
        stagger: {
          amount: 0.5,
        },
      },
      '>'
    )

    timeline.from(
      pointsIcons,
      {
        autoAlpha: 0,
        scale: 0.75,
        duration: 0.25,
        stagger: {
          amount: 0.25,
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
    <div className='proslist'>
      <div className='proslist__wrapper' ref={wrapper}>
        <figure
          className='proslist__image__wrapper'
          style={{ visibility: 'hidden' }}
        >
          <PrismicNextImage field={data.primary.image} alt='' priority />
        </figure>
        <div className='proslist__content__wrapper'>
          <div className='proslist__title' style={{ visibility: 'hidden' }}>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div
            className='proslist__paragraphs'
            style={{ visibility: 'hidden' }}
          >
            <PrismicRichText field={data.primary.paragraphs} />
          </div>
          <div className='proslist__list__wrapper'>
            {data.items.map((element, index) => {
              return (
                <div className='proslist__list__point__wrapper' key={index}>
                  <figure
                    className='proslist__list__point__icon__wrapper'
                    style={{ visibility: 'hidden' }}
                  >
                    <PrismicNextImage
                      field={element.point_icon}
                      alt=''
                      priority
                    />
                  </figure>
                  <div
                    className='proslist__list__point__caption'
                    style={{ visibility: 'hidden' }}
                  >
                    <PrismicRichText field={element.point_text} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
