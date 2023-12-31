'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

// ページ共通
import { useTranslation } from '@/hooks/i18n'
import { useLang } from '@/hooks/lang'
import { setMetadata } from '@/utils'
import { LangLink } from '@/components'

// ページ固有
import { topTranslation as translation } from '../_translations'
import type { Inputs } from '../_types'
import { Input, Label, ErrorText } from '../_components/form'

export const generateMetadata = setMetadata(translation)

const inputLength = {
  name: {
    min: 1,
    max: 20,
  },
  age: {
    min: 1,
    max: 99,
  },
}

// zodでバリデート
const inputSchema = (errors: string[]) =>
  z.object({
    name: z
      .string()
      .min(inputLength['name']['min'], errors[0])
      .max(inputLength['name']['max'], errors[0]),
    age: z.string().refine((data) => {
      const parsedNumber = parseInt(data)
      return (
        !isNaN(parsedNumber) &&
        parsedNumber >= inputLength['age']['min'] &&
        parsedNumber <= inputLength['age']['max']
      )
    }, errors[1]),
  })

export function TopPage() {
  const lang = useLang()
  const { t } = useTranslation({ lang, translation })
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(
      inputSchema([
        t('validates.name', {
          min: inputLength['name']['min'],
          max: inputLength['name']['max'],
        }),
        t('validates.age', {
          min: inputLength['age']['min'],
          max: inputLength['age']['max'],
        }),
      ]),
    ),
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name, age } = data
    // submit処理
    console.log(name, age)
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='mb-5'>{t('lead')}</h1>
        <h2 className='mb-5'>{t('count', { count })}</h2>
        <div className='border-2'>
          <button className='block w-full' onClick={() => setCount((prev) => prev + 1)}>
            {t('button')}
          </button>
        </div>
        <h2 className='mt-5 mb-5 text-center'>Link Sample</h2>
        <ul className='flex justify-center gap-4'>
          <li>
            <LangLink href='/hoge'>Hoge Link &gt;</LangLink>
          </li>
          <li>
            <LangLink href='/huga'>Huga Link &gt;</LangLink>
          </li>
        </ul>
        <h2 className='mt-5 mb-5 text-center'>Form Sample</h2>
        <div className='flex-1'>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(onSubmit)(e)
            }}
          >
            <div className='mb-5'>
              <Label>{t('name')}</Label>
              <Input {...register('name')} />
              {errors.name?.message && <ErrorText error={errors.name.message} />}
            </div>
            <div className='mb-5'>
              <Label>{t('age')}</Label>
              <Input {...register('age')} />
              {errors.age?.message && <ErrorText error={errors.age.message} />}
            </div>
            <div className='flex justify-center'>
              <button className='w-[100px] h-10 text-white bg-[#bbb]' type='submit'>
                {t('submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
