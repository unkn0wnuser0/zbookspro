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

export default function ClientHome({
  data: prismicData,
  partials,
}: {
  data: Content.IndexDocumentData
  partials: Content.PartialsDocumentData
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
      if (element.slice_type === 'pros_icons_block') return element
    }) as Content.ProsIconsBlockSlice,
    experienceBlock: prismicData.slices.find((element) => {
      if (element.slice_type === 'experience_block') return element
    }) as Content.ExperienceBlockSlice,
    contactForm: prismicData.slices.find((element) => {
      if (element.slice_type === 'contact_form') return element
    }) as Content.ContactFormSlice,
  }

  return (
    <ScrollContainer>
      <div className='index'>
        <div className='index__wrapper'>
          <HeroBanner data={data.heroBanner} />
          <TextBlock data={data.textBlock} />
          <ProsList data={data.prosBlock} />
          <AlignedTextBlock data={data.leftTextBlock} />
          <HowItWorks data={data.howItWorksBlock} />
          <Pricing data={data.pricingBlock} partials={partials} />
          <ProsIcons data={data.prosIconsBlock} />
          <Experience data={data.experienceBlock} />
          <ContactForm data={data.contactForm} />
        </div>
      </div>
    </ScrollContainer>
  )
}
