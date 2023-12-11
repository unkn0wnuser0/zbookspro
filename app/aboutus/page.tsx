import { createClient } from '@/prismicio'
import ClientAboutUs from './clientPage'
import './styles.scss'

export const revalidate = 0
const client = createClient()

export async function generateMetadata() {
  const { data } = await client.getSingle('about_us')

  return {
    title: data.meta_title,
    description: data.meta_description,
    image: data.meta_image.url,
  }
}

export default async function AboutUs() {
  const { data: index } = await client.getSingle('about_us')
  const { data: modal } = await client.getSingle('contact_form')

  return <ClientAboutUs data={index} modal={modal} animated={false} />
}
