'use client'

import './contactform.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'

export default function ContactForm({
  data,
}: {
  data: Content.ContactFormSlice
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const timeline = GSAP.timeline()

  const animateIn = () => {
    const image = wrapper.current?.querySelectorAll(
      '.contactform__image__wrapper'
    )!
    const title = wrapper.current?.querySelector('.contactform__title')!
    const description = wrapper.current?.querySelector(
      '.contactform__description'
    )!
    const inputs = Array.from(
      wrapper.current?.querySelectorAll('.contactform__input__helper')!
    )
    const button = wrapper.current?.querySelector('.contactform__button')!

    timeline.from(image, {
      autoAlpha: 0,
      scale: 0.75,
      duration: 0.5,
    })

    timeline.from(
      [title, description],
      {
        autoAlpha: 0,
        duration: 0.5,
        stagger: {
          amount: 0.35,
        },
      },
      '<'
    )

    timeline.from(
      inputs,
      {
        autoAlpha: 0,
        xPercent: -10,
        duration: 0.5,
        stagger: {
          amount: 0.35,
        },
      },
      '>'
    )

    timeline.from(
      button,
      {
        autoAlpha: 0,
        duration: 0.5,
      },
      '>'
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
    <div className='contactform'>
      <div className='contactform__wrapper' ref={wrapper}>
        <figure
          className='contactform__image__wrapper'
          style={{ visibility: 'hidden' }}
        >
          <PrismicNextImage
            className='contactform__image'
            field={data.primary.image}
            alt=''
            priority
          />
        </figure>
        <div className='contactform__content__wrapper'>
          <div className='contactform__title' style={{ visibility: 'hidden' }}>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div
            className='contactform__description'
            style={{ visibility: 'hidden' }}
          >
            <PrismicRichText field={data.primary.description} />
          </div>
          <div className='contactform__inputs__wrapper'>
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.name_helper_text!}
              style={{ visibility: 'hidden' }}
            />
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.email_helper_text!}
              style={{ visibility: 'hidden' }}
            />
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.phone_helper_text!}
              style={{ visibility: 'hidden' }}
            />
            <button
              className='contactform__button'
              style={{ visibility: 'hidden' }}
            >
              {data.primary.button_caption}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
