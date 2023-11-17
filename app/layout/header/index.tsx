'use client'

import './styles.scss'

import { Content } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef, useState } from 'react'
import GSAP from 'gsap'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header({
  data,
  partials,
}: {
  data: Content.HeaderDocumentData
  partials: Content.PartialsDocumentData
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const [index, setIndex] = useState<boolean>(pathname == '/' ? true : false)

  useEffect(() => {
    const anchors = Array.from(wrapper.current?.querySelectorAll('#anchor')!)
    anchors.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault()
        const targetID = element.getAttribute('data-target')!
        const target = document.querySelector(`#${targetID}`)
        target?.scrollIntoView({
          behavior: 'smooth',
        })
      })
    })
  }, [])

  const getIndex = () => {
    const index = document.querySelector('.index')

    if (index) {
      setIndex(true)
    } else {
      setIndex(false)
    }
  }

  useEffect(() => {
    const getIndex = document.querySelector('.index')
    if (!getIndex) {
      setIndex(false)
    } else {
      setIndex(true)
    }
  }, [pathname])

  return (
    <div className='header'>
      <div className='header__wrapper' ref={wrapper}>
        <Link
          href={'/'}
          // id={pathname === '/' ? 'anchor' : undefined}
          // data-target={undefined}
          // scroll={true}
        >
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
                  scroll={true}
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
