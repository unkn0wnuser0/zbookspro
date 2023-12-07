'use client'

import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import './styles.scss'

export default function Footer({ data }: { data: Content.FooterDocumentData }) {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__copyright'>
          <PrismicRichText field={data.copyright_text} />
        </div>
        <div className='footer__links__wrapper'>
          {data.links.map((element, index) => {
            return (
              <PrismicNextLink
                className='footer__link'
                field={element.link}
                key={index}
              >
                {element.caption}
              </PrismicNextLink>
            )
          })}
        </div>
      </div>
    </div>
  )
}
