import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'

export const revalidate = 0

import './styles.scss'

export default async function Home({
  params,
}: {
  params: { textpage: string }
}) {
  const client = createClient()

  const { data } = await client.getByUID('textpage', params.textpage)

  return (
    <div className='textpage'>
      <div className='textpage__wrapper'>
        <div className='textpage__title'>
          <PrismicRichText field={data.title} />
        </div>
        <div className='textpage__text'>
          <PrismicRichText field={data.text} />
        </div>
      </div>
    </div>
  )
}
