const texts = {
  ja: {
    meta: {
      title: 'トップ',
      description: 'トップページです',
    },
    translation: {},
  },
  en: {
    meta: {
      title: 'Top',
      description: 'This is top page',
    },
    translation: {},
  },
}

const topTranslation = { ...texts } as const

export { topTranslation }
