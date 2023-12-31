'use client'

import { Content } from '@prismicio/client'
import InterpolationScroll from '../components/InterpScroll'
import HowItWorks from '../components/HowItWorks'
import { PrismicRichText } from '@prismicio/react'
import ContactForm from '../components/ContactForm'

export default function ClientHowItWorks({
  data: prismicData,
  modal,
  animated,
}: {
  data: Content.HowItWorksDocumentData
  modal: Content.ContactFormDocumentData
  animated?: boolean
}) {
  const data = {
    howItWorks: prismicData.slices.find((element) => {
      if (element.slice_type === 'how_it_works') return element
    }) as Content.HowItWorksSlice,
    contactForm: prismicData.slices.find((element) => {
      if (element.slice_type === 'contact_form') return element
    }) as Content.ContactFormSlice,
  }

  return (
    // <InterpolationScroll>
    <div className='howitworks'>
      <div className='howitworks__page__wrapper'>
        <div className='howitworks__heading__wrapper'>
          <div className='howitworks__title'>
            <PrismicRichText field={prismicData.title} />
          </div>
          <div className='howitworks__description'>
            <PrismicRichText field={prismicData.description} />
          </div>
        </div>
        <HowItWorks data={data.howItWorks} animated={animated} />
        <ContactForm
          data={data.contactForm}
          modal={modal}
          animated={animated}
        />
      </div>
    </div>
    // {/* </InterpolationScroll> */}
  )
}
