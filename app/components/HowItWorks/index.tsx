'use client'

import './howitworks.module.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export default function HowItWorks({
  data,
}: {
  data: Content.HowItWorksSlice
}) {
  return (
    <div className='howitworks'>
      <div className='howitworks__wrapper'>
        <div className='howitworks__title'>
          <PrismicRichText field={data.primary.title} />
        </div>
        <div className='howitworks__steps__wrapper'>
          {data.items.map((element, index) => {
            return (
              <div className='howitworks__step__wrapper' key={index}>
                <figure className='howitworks__step__icon__wrapper'>
                  <PrismicNextImage
                    className='howitworks__step__icon'
                    field={element.image}
                    alt=''
                    priority
                  />
                </figure>
                <div className='howitworks__step__content__wrapper'>
                  <div className='howitworks__step__point'>
                    <PrismicRichText field={element.point} />
                  </div>
                  <div className='howitworks__step__description'>
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
