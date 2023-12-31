import { LangContext } from '@/providers'
import { useContext } from 'react'

export function useLang() {
  const lang = useContext(LangContext)
  if (lang === null) throw new Error('useLang must be used within a LangProvider')
  return lang
}
