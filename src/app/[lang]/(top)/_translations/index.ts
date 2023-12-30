const texts = {
  ja: {
    meta: {
      title: 'トップ',
      description: 'トップページです',
    },
    translation: {
      lead: '本文になります',
      button: 'カウント追加ボタン',
      count: 'カウント: {{count}}!',
      name: '名前',
      age: '年齢',
      submit: '送信',
      validates: {
        name: '名前は{{min}}文字以上{{max}}文字以下で入力してください',
        age: '年齢は{{min}}歳以上{{max}}歳以下で入力してください',
      },
    },
  },
  en: {
    meta: {
      title: 'Top',
      description: 'This is top page',
    },
    translation: {
      lead: 'This is lead',
      button: 'Add Count Button',
      count: 'Count: {{count}}!',
      name: 'Name',
      age: 'Age',
      submit: 'submit',
      validates: {
        name: 'Please enter a name between {{min}} and {{max}} characters',
        age: 'Please enter an age between {{min}} and {{max}}',
      },
    },
  },
}

const topTranslation = { ...texts } as const

export { topTranslation }
