import { DetailPage } from './_components/DetailPage'

import { detailTranslation as translation } from './_translations'
import { setMetadata } from '@/utils'

export const generateMetadata = setMetadata(translation)

export default function Page() {
  return <DetailPage />
}
