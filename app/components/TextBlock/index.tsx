'use client'

import './textblock.scss'

import { Content } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'

export default function TextBlock({ data }: { data: Content.TextBlockSlice }) {
  return (
    <div className='textblock'>
      <div className='textblock__wrapper'>
        <div className='textblock__title'>
          <PrismicRichText field={data.primary.title} />
        </div>
        <div className='textblock__paragraphs'>
          <PrismicRichText field={data.primary.paragraphs} />
        </div>
      </div>
    </div>
  )
}
