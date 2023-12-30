'use client'

import { Languages, useTranslation } from '@/hooks/i18n'

import { topTranslation as translation } from '@/translations'
import { setMetadata } from '@/utils'
import { useState } from 'react'

export const generateMetadata = setMetadata(translation)

type Props = {
  lang: Languages
}

export function TopPage({ lang }: Props) {
  const { t } = useTranslation({ lang, translation })
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='mb-5'>{t('lead')}</h1>
        <h2 className='mb-5'>{t('count', { count })}</h2>
        <div className='border-2'>
          <button className='block w-full' onClick={counter}>
            add +
          </button>
        </div>
      </div>
    </div>
  )
}
