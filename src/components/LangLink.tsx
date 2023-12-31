'use client'

import { useLang } from '@/hooks/lang'
import Link from 'next/link'

type Props = Readonly<{
  href: string
  children?: React.ReactNode
}> &
  React.ComponentPropsWithoutRef<'a'>

export function LangLink({ href, children, ...props }: Props) {
  const lang = useLang()
  return (
    <Link {...props} href={`/${lang}${href}`}>
      {children}
    </Link>
  )
}
