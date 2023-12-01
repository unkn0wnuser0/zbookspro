'use client'

import { Content } from '@prismicio/client'
import InterpolationScroll from '../components/InterpScroll'
import { PrismicRichText } from '@prismicio/react'
import Pricing_v2 from '../components/Pricing/v2'
import { PrismicNextImage } from '@prismicio/next'
import ContactForm from '../components/ContactForm'

export default function ClientOurServices({
  data: prismicData,
  modal,
  animated,
}: {
  data: Content.OurServicesDocumentData
  modal: Content.ContactFormDocumentData
  animated?: boolean
}) {
  const data = {
    pricing: prismicData.slices.find((element) => {
      if (element.slice_type === 'pricing') return element
    }) as Content.PricingSlice,
    contactForm: prismicData.slices.find((element) => {
      if (element.slice_type === 'contact_form') return element
    }) as Content.ContactFormSlice,
  }

  return (
    // <InterpolationScroll>
    <div className='ourservices'>
      <div className='ourservices__wrapper'>
        <div className='ourservices__heading__wrapper'>
          <div className='ourservices__title'>
            <PrismicRichText field={prismicData.title} />
          </div>
          <div className='ourservices__description'>
            <PrismicRichText field={prismicData.description} />
          </div>
        </div>
        <div className='oursevices__services__wrapper'>
          {prismicData.services.map((element, index) => {
            return (
              <div className='oursevices__service__wrapper' key={index}>
                <figure className='oursevices__service__icon__wrapper'>
                  <PrismicNextImage field={element.icon} alt='' priority />
                </figure>
                <div className='oursevices__service__name'>
                  <PrismicRichText field={element.name} />
                </div>
              </div>
            )
          })}
        </div>
        <Pricing_v2 data={data.pricing} animated={animated} />
        <ContactForm
          data={data.contactForm}
          modal={modal}
          animated={animated}
        />
      </div>
    </div>
    // </InterpolationScroll>
  )
}
