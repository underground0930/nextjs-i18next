'use client'

import { useTranslation } from '@/hooks/i18n'
import { useLang } from '@/hooks/lang'
import { setMetadata } from '@/utils'

// ページ固有
import { detailTranslation as translation } from '../_translations'

// metaの設定
export const generateMetadata = setMetadata(translation)

export function DetailPage() {
  const lang = useLang()
  const { t } = useTranslation({ lang, translation })

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='mb-5'>{t('lead')}</h1>
      </div>
    </div>
  )
}
