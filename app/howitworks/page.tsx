import { createClient } from '@/prismicio'
import ClientHowItWorks from './clientPage'

import './styles.scss'

export const revalidate = 0

export default async function AboutUs() {
  const client = createClient()

  const { data: index } = await client.getSingle('how_it_works')

  return <ClientHowItWorks data={index} />
}
