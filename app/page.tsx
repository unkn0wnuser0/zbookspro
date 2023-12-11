import { createClient } from '@/prismicio'
import ClientHome from './ClientPage'
import { Metadata } from 'next'

export const revalidate = 0
const client = createClient()

export async function generateMetadata() {
  const { data } = await client.getSingle('index')

  return {
    title: data.meta_title,
    description: data.meta_description,
    image: data.meta_image,
  }
}

export default async function Home() {
  const { data: index } = await client.getSingle('index')
  const { data: partials } = await client.getSingle('partials')
  const { data: modal } = await client.getSingle('contact_form')
  const { data: shared } = await client.getSingle('shared_components')

  return (
    <ClientHome
      data={index}
      partials={partials}
      modal={modal}
      shared={shared}
      animated={false}
    />
  )
}
