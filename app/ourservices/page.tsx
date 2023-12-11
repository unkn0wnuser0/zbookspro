import { createClient } from '@/prismicio'
import ClientOurServices from './clientPage'

import './styles.scss'

export const revalidate = 0
const client = createClient()

export async function generateMetadata() {
  const { data } = await client.getSingle('our_services')

  return {
    title: data.meta_title,
    description: data.meta_description,
    openGraph: {
      images: [data.meta_image.url],
    },
  }
}

export default async function AboutUs() {
  const { data: index } = await client.getSingle('our_services')
  const { data: modal } = await client.getSingle('contact_form')

  return <ClientOurServices data={index} modal={modal} animated={false} />
}
