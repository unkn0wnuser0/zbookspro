import { createClient } from '@/prismicio'
import ClientHowItWorks from './clientPage'

import './styles.scss'

export const revalidate = 0

export default async function AboutUs() {
  const client = createClient()

  const { data: index } = await client.getSingle('how_it_works')
  const { data: modal } = await client.getSingle('contact_form')

  return <ClientHowItWorks data={index} modal={modal} animated={false} />
}
