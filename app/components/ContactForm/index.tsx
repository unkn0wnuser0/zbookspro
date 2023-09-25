'use client'

import './contactform.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export default function ContactForm({
  data,
}: {
  data: Content.ContactFormSlice
}) {
  return (
    <div className='contactform'>
      <div className='contactform__wrapper'>
        <figure className='contactform__image__wrapper'>
          <PrismicNextImage
            className='contactform__image'
            field={data.primary.image}
            alt=''
            priority
          />
        </figure>
        <div className='contactform__content__wrapper'>
          <div className='contactform__title'>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div className='contactform__description'>
            <PrismicRichText field={data.primary.description} />
          </div>
          <div className='contactform__inputs__wrapper'>
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.name_helper_text!}
            />
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.email_helper_text!}
            />
            <input
              className='contactform__input__helper'
              type='text'
              placeholder={data.primary.phone_helper_text!}
            />
            <button className='contactform__button'>
              {data.primary.button_caption}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
