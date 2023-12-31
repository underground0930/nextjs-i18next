import { Inter } from 'next/font/google'
import '../globals.css'

import type { Languages } from '@/hooks/i18n'
import { LangProvider } from '@/providers'

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
        <LangProvider lang={lang}>{children}</LangProvider>
      </body>
    </html>
  )
}
