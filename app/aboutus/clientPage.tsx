'use client'

import { Content } from '@prismicio/client'
import InterpolationScroll from '../components/InterpScroll'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import ContactForm from '../components/ContactForm'

export default function ClientAboutUs({
  data: prismicData,
  modal,
  animated,
}: {
  data: Content.AboutUsDocumentData
  modal: Content.ContactFormDocumentData
  animated?: boolean
}) {
  const data = {
    contactForm: prismicData.slices.find((element) => {
      if (element.slice_type === 'contact_form') return element
    }) as Content.ContactFormSlice,
  }

  return (
    // <InterpolationScroll>
    <div className='aboutus'>
      <div className='aboutus__wrapper'>
        <div className='aboutus__heading__wrapper'>
          <div className='aboutus__heading'>
            <div className='aboutus__title'>
              <PrismicRichText field={prismicData.title} />
            </div>
            <div className='aboutus__description'>
              <PrismicRichText field={prismicData.description} />
            </div>
          </div>
        </div>

        <div className='aboutus__team__heading__wrapper'>
          <div className='aboutus__team__title'>
            <PrismicRichText field={prismicData.team_title} />
          </div>
          <div className='aboutus__team__description'>
            <PrismicRichText field={prismicData.team_description} />
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
        <div className='aboutus__badges__wrapper'>
          <div className='aboutus__badges__title'>
            <PrismicRichText field={prismicData.badges_title} />
          </div>
          <div className='aboutus__badges'>
            {prismicData.badges.map((element, index) => {
              return (
                <PrismicNextLink field={element.link} key={index}>
                  <div className='aboutus__badge__wrapper'>
                    <figure className='aboutus__badge__image__wrapper'>
                      <PrismicNextImage field={element.image} alt='' />
                    </figure>
                  </div>
                </PrismicNextLink>
              )
            })}
          </div>
        </div>
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
