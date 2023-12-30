// localeに応じてリンクのルートを変更する
'use client'

import { Languages } from '@/hooks/i18n'
import Link from 'next/link'

type Props = Readonly<{
  lang: Languages
  children?: React.ReactNode
}> &
  React.ComponentPropsWithoutRef<'a'>

export function LangLink({ lang, children, ...props }: Props) {
  const href = props.href || ''
  if (!lang) return null
  return (
    <Link {...props} href={`/${lang}${href}`}>
      {children}
    </Link>
  )
}
