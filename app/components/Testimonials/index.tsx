'use client'

// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './testimonials.scss'

import { Content } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import { useEffect, useRef } from 'react'
import { createObserver } from '../Observer'
import GSAP from 'gsap'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { Carousel } from 'react-responsive-carousel'

export default function Testimonials({
  data,
}: {
  data: Content.TestimonialsSlice[]
}) {
  const wrapper = useRef<HTMLDivElement>(null)

  return (
    <div className='testimonials'>
      <div className='testimonials__wrapper' ref={wrapper}>
        <div className='testimonials__title'>
          <PrismicRichText field={data[0].primary.title} />
        </div>
        {/* <div className='testimonials__cards'> */}
        <Carousel
          axis='horizontal'
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          emulateTouch
          interval={3000}
          infiniteLoop
          swipeable
        >
          {data[0].items.map((element, index) => {
            return (
              <div className='testimonials__testimonial__wrapper' key={index}>
                <figure className='testimonials__testimonial__photo__wrapper'>
                  <PrismicNextImage field={element.photo} alt='' />
                </figure>
                <div className='testimonials__testimonial__name'>
                  <PrismicRichText field={element.name} />
                </div>
                <PrismicNextLink
                  field={element.company_link}
                  className='testimonials__testimonial__company'
                >
                  <PrismicRichText field={element.company_name} />
                </PrismicNextLink>
                <div className='testimonials__testimonial__text'>
                  <PrismicRichText field={element.text} />
                </div>
              </div>
            )
          })}
        </Carousel>
        {/* </div> */}
      </div>
    </div>
  )
}
