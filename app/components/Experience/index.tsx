'use client'

import './experience.module.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export default function Experience({
  data,
}: {
  data: Content.ExperienceBlockSlice
}) {
  return (
    <div className='experience'>
      <div className='experience__wrapper'>
        <div className='experience__title'>
          <PrismicRichText field={data.primary.title} />
        </div>
        <div className='experience__points__wrapper'>
          {data.items.map((element, index) => {
            return (
              <div className='experience__point__wrapper' key={index}>
                <figure className='experience__point__image__wrapper'>
                  <PrismicNextImage
                    className='experience__point__image'
                    field={element.image}
                    alt=''
                    priority
                  />
                </figure>
                <div className='experience__content__wrapper'>
                  <div className='experience__point__title'>
                    <PrismicRichText field={element.title} />
                  </div>
                  <div className='experience__description'>
                    <PrismicRichText field={element.description} />
                  </div>
                  <button className='experience__button'>
                    {element.button_caption}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
