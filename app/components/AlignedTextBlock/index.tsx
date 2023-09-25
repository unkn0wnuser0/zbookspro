'use client'

import './alignedtextblock.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export default function AlignedTextBlock({
  data,
}: {
  data: Content.AlignedTextBlockSlice
}) {
  return (
    <div className='textblock__aligned'>
      <div className='textblock__aligned__wrapper'>
        <div className='textblock__aligned__content__wrapper'>
          <div className='textblock__aligned__title'>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div className='textblock__aligned__paragraphs'>
            <PrismicRichText field={data.primary.paragraphs} />
          </div>
        </div>
        <figure className='textblock__aligned__image__wrapper'>
          <PrismicNextImage
            className='textblock__aligned__image'
            field={data.primary.image}
            alt=''
            priority
          />
        </figure>
      </div>
    </div>
  )
}
