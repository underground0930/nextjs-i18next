import { TopPage } from './_components/TopPage'

import { topTranslation as translation } from './_translations'
import { setMetadata } from '@/utils'

export const generateMetadata = setMetadata(translation)

export default function Page() {
  return <TopPage />
}
