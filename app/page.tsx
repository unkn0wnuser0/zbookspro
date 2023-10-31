import { createClient } from '@/prismicio'
import ClientHome from './ClientPage'

export const revalidate = 0

export default async function Home() {
  const client = createClient()

  const { data: index } = await client.getSingle('index')
  const { data: partials } = await client.getSingle('partials')
  const { data: modal } = await client.getSingle('contact_form')

  return <ClientHome data={index} partials={partials} modal={modal} />
}
