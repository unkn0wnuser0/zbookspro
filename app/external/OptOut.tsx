'use client'

import { Content } from '@prismicio/client'
import { ccpa_optout } from './ccpta-opt-out'
import { useEffect } from 'react'

export default function Footer({ data }: { data: Content.FooterDocumentData }) {
  useEffect(() => {}, [])
  return <div className='ccpa'></div>
}
