import { Languages } from '@/hooks/i18n'

import { topTranslation as translation } from '@/translations'
import { setMetadata } from '@/utils'

export const generateMetadata = setMetadata(translation)

type Props = {
  params: {
    lang: Languages
  }
}

export default function Page({ params: { lang } }: Props) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>{lang}</main>
  )
}
