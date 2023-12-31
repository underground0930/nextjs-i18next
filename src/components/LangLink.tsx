// localeに応じてリンクのルートを変更する
'use client'

import { useLang } from '@/hooks/lang'
import Link from 'next/link'

type Props = Readonly<{
  children?: React.ReactNode
}> &
  React.ComponentPropsWithoutRef<'a'>

export function LangLink({ children, ...props }: Props) {
  const lang = useLang()
  const href = props.href || ''
  return (
    <Link {...props} href={`/${lang}${href}`}>
      {children}
    </Link>
  )
}
