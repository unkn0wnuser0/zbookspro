import { createClient } from '@/prismicio'
import ClientOurServices from './clientPage'

import './styles.scss'

export const revalidate = 0

export default async function AboutUs() {
  const client = createClient()

  const { data: index } = await client.getSingle('our_services')

  return <ClientOurServices data={index} />
}
