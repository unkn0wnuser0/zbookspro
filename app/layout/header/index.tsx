'use client'

import './styles.scss'

import { Content } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { useRef } from 'react'
import GSAP from 'gsap'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'

export default function Header({
  data,
  partials,
}: {
  data: Content.HeaderDocumentData
  partials: Content.PartialsDocumentData
}) {
  const wrapper = useRef<HTMLDivElement>(null)

  return (
    <div className='header'>
      <div className='header__wrapper' ref={wrapper}>
        <Link href={'/'} scroll={false}>
          <figure className='header__logo__wrapper'>
            <PrismicNextImage field={partials.logo} alt='' priority />
          </figure>
        </Link>
        <div className='header__links__wrapper'>
          {data.navigation_links.map((element, index) => {
            return (
              <div className='header__link__wrapper' key={index}>
                <PrismicNextLink
                  field={element.link}
                  className='header__link'
                  id={element.anchor_div ? 'anchor' : undefined}
                  data-target={element.anchor_div}
                  scroll={false}
                >
                  {element.caption}
                </PrismicNextLink>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
