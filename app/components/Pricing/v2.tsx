'use client'

import './pricing.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function Pricing_v2({
  data,
  index,
}: {
  data: Content.PricingSlice
  index: boolean
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const title = wrapper.current?.querySelector('.pricing__title')
    const description = wrapper.current?.querySelector('.pricing__description')
    const headingElements = wrapper.current?.querySelector(
      '.pricing__table__heading__wrapper'
    )?.childNodes!
    const lines = wrapper.current?.querySelectorAll('.pricing__line__wrapper')!
    const icons = wrapper.current?.querySelectorAll(
      '.pricing__line__mark__icon'
    )!

    timeline.from(
      [title, description],
      {
        autoAlpha: 0,
        yPercent: 15,
        duration: 0.35,
        stagger: {
          amount: 0.15,
        },
      },
      '>'
    )

    timeline.from(
      headingElements,
      {
        autoAlpha: 0,
        duration: 0.35,
        stagger: {
          amount: 0.35,
        },
      },
      '>-0.1'
    )

    timeline.from(
      lines,
      {
        autoAlpha: 0,
        yPercent: 15,
        duration: 0.5,
        stagger: {
          amount: 0.35,
        },
      },
      '>'
    )

    timeline.from(
      icons,
      {
        autoAlpha: 0,
        duration: 0.5,
        stagger: {
          amount: 0.75,
        },
      },
      '>-0.5'
    )
  }

  useEffect(() => {
    createObserver({
      element: wrapper.current,
      animationIn: animateIn,
      rootMargin: '-15% 0% -15% 0%',
      threshold: 0.12,
      freeze: true,
    })
  }, [])

  return (
    <div className='pricing'>
      <div className='pricing__wrapper' id='pricing-anchor' ref={wrapper}>
        <div className='pricing__title__wrapper'>
          <div className='pricing__title' style={{ visibility: 'hidden' }}>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div
            className='pricing__description'
            style={{ visibility: 'hidden' }}
          >
            <PrismicRichText field={data.primary.description} />
          </div>
        </div>

        {/* TABLE */}

        <div className='pricing__table__wrapper'>
          <div className='pricing__table__heading__wrapper v2'>
            {/* PACKAGES */}

            <div
              className='pricing__package__wrapper v2'
              style={{ visibility: 'hidden' }}
            >
              <div className='pricing__package__title'>
                {data.primary.start_package_name}
              </div>
              <div className='pricing__package__description'>
                <PrismicRichText
                  field={data.primary.start_package_description}
                />
              </div>
            </div>
            <div
              className='pricing__package__wrapper v2'
              style={{ visibility: 'hidden' }}
            >
              <div className='pricing__package__title'>
                {data.primary.full_package_name}
              </div>
              <div className='pricing__package__description'>
                <PrismicRichText
                  field={data.primary.full_package_description}
                />
              </div>
            </div>
          </div>
        </div>
        {index && (
          <div className='cta__button__wrapper'>
            <PrismicNextLink
              className='cta__link'
              field={data.primary.button_link}
            >
              <button className='cta__button pricing'>
                {data.primary.button_caption}
              </button>
            </PrismicNextLink>
          </div>
        )}
      </div>
    </div>
  )
}
