'use client'

import './pricing.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function Pricing({
  data,
  partials,
}: {
  data: Content.PricingSlice
  partials: Content.PartialsDocumentData
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

  const packageCheck = (element: Content.PricingSliceDefaultItem) => {
    const checked = () => {
      return (
        <PrismicNextImage
          className='table__icon checked'
          field={partials.checked_icon}
          alt=''
          priority
        />
      )
    }

    const notchecked = () => {
      return (
        <PrismicNextImage
          className='table__icon unchecked'
          field={partials.unchecked_icon}
          alt=''
          priority
        />
      )
    }

    return (
      <>
        <figure
          className='pricing__line__mark__icon startpackage'
          style={{ visibility: 'hidden' }}
        >
          {element.start_package_included == true ? checked() : notchecked()}
        </figure>
        <figure
          className='pricing__line__mark__icon fullpackage'
          style={{ visibility: 'hidden' }}
        >
          {element.full_package_included == true ? checked() : notchecked()}
        </figure>
      </>
    )
  }

  return (
    <div className='pricing'>
      <div className='pricing__wrapper' ref={wrapper}>
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
          <div className='pricing__table__heading__wrapper'>
            <div className='pricing__included' style={{ visibility: 'hidden' }}>
              {data.primary.services_included}
            </div>

            {/* PACKAGES */}

            <div
              className='pricing__package__wrapper'
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
              <div className='pricing__package__price'>
                <PrismicRichText field={data.primary.start_package_price} />
              </div>
            </div>
            <div
              className='pricing__package__wrapper'
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
              <div className='pricing__package__price'>
                <PrismicRichText field={data.primary.full_package_price} />
              </div>
            </div>
          </div>
          <div className='pricing__lines__wrapper'>
            {data.items.map((element, index) => {
              return (
                <div
                  className='pricing__line__wrapper'
                  key={index}
                  style={{ visibility: 'hidden' }}
                >
                  <div className='pricing__line__caption'>
                    <PrismicRichText field={element.service} />
                  </div>
                  {packageCheck(element)}
                </div>
              )
            })}
          </div>
        </div>

        <button className='pricing__button'>
          {data.primary.button_caption}
        </button>
      </div>
    </div>
  )
}
