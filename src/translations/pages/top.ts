const texts = {
  ja: {
    meta: {
      title: 'トップ',
      description: 'トップページです',
    },
    translation: {
      lead: '本文になります',
      count: 'カウント: {{count}}!',
    },
  },
  en: {
    meta: {
      title: 'Top',
      description: 'This is top page',
    },
    translation: {
      lead: 'This is lead',
      count: 'Count: {{count}}!',
    },
  },
}

const topTranslation = { ...texts } as const

export { topTranslation }
