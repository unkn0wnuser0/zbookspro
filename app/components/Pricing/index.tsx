'use client'

import './pricing.module.scss'

import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

export default function Pricing({
  data,
  partials,
}: {
  data: Content.PricingSlice
  partials: Content.PartialsDocumentData
}) {
  const packageCheck = (element: Content.PricingSliceDefaultItem) => {
    const checked = () => {
      return (
        <PrismicNextImage
          className='table__icon checked'
          field={partials.checked_icon}
          alt=''
          priority
        />
      )
    }

    const notchecked = () => {
      return (
        <PrismicNextImage
          className='table__icon unchecked'
          field={partials.unchecked_icon}
          alt=''
          priority
        />
      )
    }

    return (
      <>
        <figure className='pricing__line__mark__icon startpackage'>
          {element.start_package_included == true ? checked() : notchecked()}
        </figure>
        <figure className='pricing__line__mark__icon fullpackage'>
          {element.full_package_included == true ? checked() : notchecked()}
        </figure>
      </>
    )
  }

  return (
    <div className='pricing'>
      <div className='pricing__wrapper'>
        <div className='pricing__title__wrapper'>
          <div className='pricing__title'>
            <PrismicRichText field={data.primary.title} />
          </div>
          <div className='pricing__description'>
            <PrismicRichText field={data.primary.description} />
          </div>

          {/* TABLE */}

          <div className='pricing__table__wrapper'>
            <div className='pricing__included'>
              {data.primary.services_included}
            </div>

            {/* PACKAGES */}

            <div className='pricing__startpackage__wrapper'>
              <div className='pricing__startpackage__title'>
                {data.primary.start_package_name}
              </div>
              <div className='pricing__startpackage__description'>
                <PrismicRichText
                  field={data.primary.start_package_description}
                />
              </div>
              <div className='pricing__startpackage__price'>
                <PrismicRichText field={data.primary.start_package_price} />
              </div>
            </div>
            <div className='pricing__fullpackage__wrapper'>
              <div className='pricing__fullpackage__title'>
                {data.primary.full_package_name}
              </div>
              <div className='pricing__fullpackage__description'>
                <PrismicRichText
                  field={data.primary.full_package_description}
                />
              </div>
              <div className='pricing__fullpackage__price'>
                <PrismicRichText field={data.primary.full_package_price} />
              </div>
            </div>
            <div className='pricing__lines__wrapper'>
              {data.items.map((element, index) => {
                return (
                  <div className='pricing__line__wrapper' key={index}>
                    <div className='pricing__line__caption'>
                      <PrismicRichText field={element.service} />
                    </div>
                    {packageCheck(element)}
                    <figure className='pricing__line__mark__icon startpackage'>
                      {element.start_package_included == true ? (
                        <div className='pricing__check'></div>
                      ) : (
                        <div className='pricing__uncheck'></div>
                      )}
                    </figure>
                    <figure className='pricing__line__mark__icon fullpackage'>
                      {element.full_package_included == true ? (
                        <div className='pricing__check'></div>
                      ) : (
                        <div className='pricing__uncheck'></div>
                      )}
                    </figure>
                  </div>
                )
              })}
            </div>
          </div>

          <button className='pricing__button'>
            {data.primary.button_caption}
          </button>
        </div>
      </div>
    </div>
  )
}
