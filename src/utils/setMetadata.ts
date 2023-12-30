// 各ページのmeta情報を設定する

import { Languages, TranslationDef } from '@/hooks/i18n'

export const setMetadata =
  (def: TranslationDef) =>
  ({
    params,
  }: {
    params: {
      lang: Languages
    }
  }) => {
    const { title, description } = def[params.lang].meta
    return {
      title,
      description,
    }
  }
