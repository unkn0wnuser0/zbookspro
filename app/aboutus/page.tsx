import { createClient } from '@/prismicio'
import ClientAboutUs from './clientPage'
import './styles.scss'

export const revalidate = 0

export default async function AboutUs() {
  const client = createClient()

  const { data: index } = await client.getSingle('about_us')
  const { data: modal } = await client.getSingle('contact_form')

  return <ClientAboutUs data={index} modal={modal} animated={false} />
}
