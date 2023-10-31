'use client'

import { Content } from '@prismicio/client'
import ScrollContainer from './components/ScrollContainer'
import HeroBanner from './components/HeroBanner'
import TextBlock from './components/TextBlock'
import ProsList from './components/ProsListBlock'
import AlignedTextBlock from './components/AlignedTextBlock'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import ProsIcons from './components/ProsIconsBlock'
import Experience from './components/Experience'
import ContactForm from './components/ContactForm'
import ProsIcons_v2 from './components/ProsIconsBlock/v2'
import Pricing_v2 from './components/Pricing/v2'
import CallToAction from './components/CallToAction'
import Logos from './components/Logos'
import InterpolationScroll from './components/InterpScroll'

export default function ClientHome({
  data: prismicData,
  modal,
  partials,
}: {
  data: Content.IndexDocumentData
  partials: Content.PartialsDocumentData
  modal: Content.ContactFormDocumentData
}) {
  const data = {
    heroBanner: prismicData.slices.find((element) => {
      if (element.slice_type === 'hero_banner') return element
    }) as Content.HeroBannerSlice,
    textBlock: prismicData.slices.find((element) => {
      if (element.slice_type === 'text_block') return element
    }) as Content.TextBlockSlice,
    prosBlock: prismicData.slices.find((element) => {
      if (element.slice_type === 'pros_list_block') return element
    }) as Content.ProsListBlockSlice,
    leftTextBlock: prismicData.slices.find((element) => {
      if (element.slice_type === 'aligned_text_block') return element
    }) as Content.AlignedTextBlockSlice,
    howItWorksBlock: prismicData.slices.find((element) => {
      if (element.slice_type === 'how_it_works') return element
    }) as Content.HowItWorksSlice,
    pricingBlock: prismicData.slices.find((element) => {
      if (element.slice_type === 'pricing') return element
    }) as Content.PricingSlice,
    prosIconsBlock: prismicData.slices.find((element) => {
      if (
        element.slice_type === 'pros_icons_block' &&
        element.variation === 'default'
      )
        return element
    }) as Content.ProsIconsBlockSlice,
    prosIconsBlock_v2: prismicData.slices.find((element) => {
      if (
        element.slice_type === 'pros_icons_block' &&
        element.variation === 'variation2'
      )
        return element
    }) as Content.ProsIconsBlockSliceVariation2,
    experienceBlock: prismicData.slices.find((element) => {
      if (element.slice_type === 'experience_block') return element
    }) as Content.ExperienceBlockSlice,
    logos: prismicData.slices.find((element) => {
      if (element.slice_type === 'logos') return element
    }) as Content.LogosSlice,
    contactForm: prismicData.slices.find((element) => {
      if (element.slice_type === 'contact_form') return element
    }) as Content.ContactFormSlice,
    callToAction: [] as Content.CallToActionSlice[],
  }

  prismicData.slices.find((element) => {
    if (element.slice_type === 'call_to_action') {
      data.callToAction.push(element)
    }
  })

  return (
    <InterpolationScroll>
      <div className='index'>
        <div className='index__wrapper'>
          <HeroBanner data={data.heroBanner} />
          <ProsIcons_v2 data={data.prosIconsBlock_v2} />
          {/* <TextBlock data={data.textBlock} /> */}
          <ProsList data={data.prosBlock} />
          {/* <AlignedTextBlock data={data.leftTextBlock} /> */}
          {/* <HowItWorks data={data.howItWorksBlock} /> */}
          <CallToAction data={data.callToAction[0]} />
          <Pricing_v2 index data={data.pricingBlock} />
          <ProsIcons data={data.prosIconsBlock} />
          <Logos data={data.logos} />
          {/* <Experience data={data.experienceBlock} /> */}
          <CallToAction data={data.callToAction[1]} variation={'v2'} />
          <ContactForm data={data.contactForm} modal={modal} />
        </div>
      </div>
    </InterpolationScroll>
  )
}
