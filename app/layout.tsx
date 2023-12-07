import { createClient } from '@/prismicio'
import './globals.scss'
import Header from './layout/header'
import './styles/index.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Cursor from './layout/cursor/cursor'
import Footer from './layout/footer'
import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { NextScript } from 'next/document'
// import ccpa_optout from '//www.termsfeed.com/public/ccpa-opt-out/releases/1.0.0/ccpa-opt-out.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZBookPro',
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
  const { data: footer } = await client.getSingle('footer')

  function AddLibrary(urlOfTheLibrary: string) {
    const script = document.createElement('script')
    script.src = urlOfTheLibrary
    script.async = true
    document.body.appendChild(script)
  }

  return (
    <html>
      <head></head>
      <body>
        <Header data={header} partials={partials} />
        {/* <Cursor speed={0.0025} /> */}
        {children}
        <Footer data={footer} />
      </body>
    </html>
  )
}
