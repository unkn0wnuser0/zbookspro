'use client'

import './herobanner.module.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export default function HeroBanner({
  data,
}: {
  data: Content.HeroBannerSlice
}) {
  return (
    <div className='herobanner'>
      <div className='herobanner__wrapper'>
        <div className='herobanner__content__wrapper'>
          <div className='herobanner__title'>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div className='herobanner__paragraphs'>
            <PrismicRichText field={data.primary.paragraphs} />
          </div>
          <button className='herobanner__button'>
            {data.primary.button_caption}
          </button>
          <figure className='herobanner__image__wrapper'>
            <PrismicNextImage
              className='herobanner__image'
              field={data.primary.image}
              alt=''
              priority
            />
          </figure>
        </div>
      </div>
    </div>
  )
}
