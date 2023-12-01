import { createClient } from '@/prismicio'
import ClientHome from './ClientPage'

export const revalidate = 0

export default async function Home() {
  const client = createClient()

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
