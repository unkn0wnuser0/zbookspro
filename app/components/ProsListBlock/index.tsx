'use client'

import './proslist.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export const revalidate = 0

export default function ProsList({
  data,
}: {
  data: Content.ProsListBlockSlice
}) {
  return (
    <div className='proslist'>
      <div className='proslist__wrapper'>
        <figure className='proslist__image__wrapper'>
          <PrismicNextImage field={data.primary.image} alt='' priority />
        </figure>
        <div className='proslist__content__wrapper'>
          <div className='proslist__title'>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div className='proslist__paragraphs'>
            <PrismicRichText field={data.primary.paragraphs} />
          </div>
          <div className='proslist__list__wrapper'>
            {data.items.map((element, index) => {
              return (
                <div className='proslist__list__point__wrapper' key={index}>
                  <figure className='proslist__list__point__icon__wrapper'>
                    <PrismicNextImage
                      field={element.point_icon}
                      alt=''
                      priority
                    />
                  </figure>
                  <div className='proslist__list__point__caption'>
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
