import { createInstance } from 'i18next'
import { Metadata } from 'next'
import { initReactI18next } from 'react-i18next/initReactI18next'

export const defaultLanguage = 'ja' as const
export const otherLanguages = ['en'] as const
export const languages = [defaultLanguage, ...otherLanguages] as const
export type Languages = (typeof languages)[number]

export type TranslationDef = {
  [L in Languages]: {
    meta: Metadata
    translation: {
      [key: string]: any
    }
  }
}

export const useTranslation = ({
  lang,
  translation,
}: {
  lang: Languages
  translation: TranslationDef
}) => {
  const i18n = createInstance()
  void i18n.use(initReactI18next).init({
    resources: translation,
    lng: lang,
    fallbackLng: defaultLanguage,
    supportedLngs: languages,
    debug: false,
  })

  return {
    t: i18n.getFixedT(lang),
    i18n,
  }
}
