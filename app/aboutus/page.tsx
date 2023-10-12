import { createClient } from '@/prismicio'
import ClientAboutUs from './clientPage'
import './styles.scss'

export const revalidate = 0

export default async function AboutUs() {
  const client = createClient()

  const { data: index } = await client.getSingle('about_us')

  return <ClientAboutUs data={index} />
}
