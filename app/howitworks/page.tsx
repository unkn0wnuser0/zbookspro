import { createClient } from '@/prismicio'
import ClientHowItWorks from './clientPage'

import './styles.scss'

export const revalidate = 0
const client = createClient()

export async function generateMetadata() {
  const { data } = await client.getSingle('our_services')

  return {
    title: data.meta_title,
    description: data.meta_description,
    image: data.meta_image,
  }
}

export default async function AboutUs() {
  const { data: index } = await client.getSingle('how_it_works')
  const { data: modal } = await client.getSingle('contact_form')

  return <ClientHowItWorks data={index} modal={modal} animated={false} />
}
