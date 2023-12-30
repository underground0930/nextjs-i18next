import { TopPage } from '@/app/[lang]/_components/TopPage'

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
  return <TopPage lang={lang} />
}
