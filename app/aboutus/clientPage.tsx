'use client'

import { Content } from '@prismicio/client'
import InterpolationScroll from '../components/InterpScroll'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import ContactForm from '../components/ContactForm'

export default function ClientAboutUs({
  data: prismicData,
}: {
  data: Content.AboutUsDocumentData
}) {
  const data = {
    contactForm: prismicData.slices.find((element) => {
      if (element.slice_type === 'contact_form') return element
    }) as Content.ContactFormSlice,
  }

  return (
    <InterpolationScroll>
      <div className='aboutus'>
        <div className='aboutus__wrapper'>
          <div className='aboutus__heading__wrapper'>
            <div className='aboutus__title'>
              <PrismicRichText field={prismicData.title} />
            </div>
            <div className='aboutus__description'>
              <PrismicRichText field={prismicData.description} />
            </div>
          </div>
          <div className='aboutus__team__wrapper'>
            {prismicData.team.map((element, index) => {
              return (
                <div className='aboutus__team__member__wrapper' key={index}>
                  <figure className='aboutus__team__member__photo__wrapper'>
                    <PrismicNextImage field={element.photo} alt='' priority />
                  </figure>
                  <div className='aboutus__team__member__name'>
                    <PrismicRichText field={element.name} />
                  </div>
                  <div className='aboutus__team__member__position'>
                    {element.position}
                  </div>
                  <div className='aboutus__team__member__description'>
                    <PrismicRichText field={element.description} />
                  </div>
                </div>
              )
            })}
          </div>
          <ContactForm data={data.contactForm} />
        </div>
      </div>
    </InterpolationScroll>
  )
}
