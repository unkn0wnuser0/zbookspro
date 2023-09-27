'use client'

import './prosicons.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export default function ProsIcons({
  data,
}: {
  data: Content.ProsIconsBlockSlice
}) {
  return (
    <div className='prosicons'>
      <div className='prosicons__wrapper'>
        <div className='prosicons__title__wrapper'>
          <div className='prosicons__title'>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div className='prosicons__description'>
            <PrismicRichText field={data.primary.description} />
          </div>
        </div>
        <div className='prosicons__points__wrapper'>
          {data.items.map((element, index) => {
            return (
              <div className='prosicons__point__wrapper' key={index}>
                <figure className='prosicons__point__icon__wrapper'>
                  <PrismicNextImage
                    className='prosicons__point__icon'
                    field={element.icon}
                    alt=''
                    priority
                  />
                </figure>
                <div className='prosicons__point__content__wrapper'>
                  <div className='prosicons__point__title'>
                    <PrismicRichText field={element.title} />
                  </div>
                  <div className='prosicons__point__description'>
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
