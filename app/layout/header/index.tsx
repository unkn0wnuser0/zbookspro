'use client'

import './styles.scss'

import { Content } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { Suspense, useEffect, useRef, useState } from 'react'
import GSAP from 'gsap'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Helmet } from 'react-helmet'
import Script from 'next/script'
import { initializeGoogleTagManager } from '@/app/utils/googleTagManager'

export default function Header({
  data,
  partials,
}: {
  data: Content.HeaderDocumentData
  partials: Content.PartialsDocumentData
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const links = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const [index, setIndex] = useState<boolean>(pathname == '/' ? true : false)

  useEffect(() => {
    initializeGoogleTagManager('GTM-WKZ66M55')
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

  const openMenu = () => {
    const open = document.querySelector('#open')
    const close = document.querySelector('#close')
    GSAP.to(open, {
      autoAlpha: 0,
      duration: 0.25,
    })

    GSAP.to(close, {
      autoAlpha: 1,
      duration: 0.25,
    })

    GSAP.to(wrapper.current, {
      height: '100vh',
      backgroundColor: 'rgba(255,255,255, 1)',
    })

    GSAP.to(links.current, {
      autoAlpha: 1,
    })
  }

  const closeMenu = () => {
    if (window.innerWidth > 760) return
    const open = document.querySelector('#open')
    const close = document.querySelector('#close')
    GSAP.to(open, {
      autoAlpha: 1,
      duration: 0.25,
    })

    GSAP.to(close, {
      autoAlpha: 0,
      duration: 0.25,
    })

    GSAP.to(wrapper.current, {
      height: '9.6rem',
      backgroundColor: 'rgba(255,255,255, 0)',
    })

    GSAP.to(links.current, {
      autoAlpha: 0,
    })
  }

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

  // document.addEventListener('DOMContentLoaded', function () {
  // ccpa_optout.run({"banner_style":"notice","banner_color_palette":"dark","banner_title":"Do Not Sell My Information","banner_description":"Turning this off will opt you out of personalized advertisements on this website.","banner_category_label":"Personalized Advertisements","banner_confirmation_button":"Save Preference","banner_close_button":"Close","change_settings_selector":"#changePreferences","loads_on_page_load_for_new_users":"true","banner_category_status_opted_out":"Opted Out","banner_category_status_not_opted_out":"Not Opted Out"});
  // });
  // </script>
  // <noscript>CCPA Opt-Out by <a href="https://www.TermsFeed.com/ccpa-opt-out/" rel="noopener">TermsFeed</a></noscript>

  const renderDesktop = () => {
    return (
      <div className='header__wrapper' ref={wrapper}>
        <Script
          src='//www.termsfeed.com/public/ccpa-opt-out/releases/1.0.0/ccpa-opt-out.js'
          onLoad={(e) => {
            console.log(e)
            return (
              <Script>
                document.addEventListener('DOMContentLoaded', function (){' '}
                {ccpa_optout.run({
                  banner_style: 'notice',
                  banner_color_palette: 'dark',
                  banner_title: 'Do Not Sell My Information',
                  banner_description:
                    'Turning this off will opt you out of personalized advertisements on this website.',
                  banner_category_label: 'Personalized Advertisements',
                  banner_confirmation_button: 'Save Preference',
                  banner_close_button: 'Close',
                  change_settings_selector: '#changePreferences',
                  loads_on_page_load_for_new_users: 'true',
                  banner_category_status_opted_out: 'Opted Out',
                  banner_category_status_not_opted_out: 'Not Opted Out',
                })}
                )
              </Script>
            )
          }}
        ></Script>
        <div className='header__heading__wrapper'>
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
          <div className='header__menu__wrapper'>
            <PrismicNextImage
              id='close'
              field={partials.close_icon}
              alt=''
              onClick={closeMenu}
            />

            <PrismicNextImage
              id='open'
              field={partials.menu_icon}
              alt=''
              onClick={openMenu}
            />
          </div>
        </div>

        <div className='header__links__wrapper' ref={links}>
          {data.navigation_links.map((element, index) => {
            return (
              <div className='header__link__wrapper' key={index}>
                <PrismicNextLink
                  field={element.link}
                  className='header__link'
                  id={element.anchor_div ? 'anchor' : undefined}
                  data-target={element.anchor_div}
                  scroll={true}
                  onClick={closeMenu}
                >
                  {element.caption}
                </PrismicNextLink>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return <div className='header'>{renderDesktop()}</div>
}
