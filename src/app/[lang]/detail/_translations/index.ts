const texts = {
  ja: {
    meta: {
      title: '詳細',
      description: '詳細です',
    },
    translation: {
      lead: '詳細の本文になります',
    },
  },
  en: {
    meta: {
      title: 'Detail',
      description: 'This is detail page',
    },
    translation: {
      lead: 'This is detail page',
    },
  },
}

const detailTranslation = { ...texts } as const

export { detailTranslation }
