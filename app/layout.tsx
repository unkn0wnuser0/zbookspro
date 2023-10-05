import { createClient } from '@/prismicio'
import './globals.scss'
import Header from './layout/header'
import './styles/index.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Cursor from './layout/cursor/cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'zBookPro',
  description: 'Professional Bookkeeping Services',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const client = createClient()

  const { data: header } = await client.getSingle('header')
  const { data: partials } = await client.getSingle('partials')

  return (
    <html>
      <body>
        <Header data={header} partials={partials} />
        {/* <Cursor speed={0.0025} /> */}
        {children}
      </body>
    </html>
  )
}
