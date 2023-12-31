'use client'

import { Inter } from 'next/font/google'
import '../globals.css'

import type { Languages } from '@/hooks/i18n'
import { LangContext } from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Languages }
}) {
  const { lang } = params
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <LangContext.Provider value={lang}>{children}</LangContext.Provider>
      </body>
    </html>
  )
}
