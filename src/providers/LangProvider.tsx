'use client'

import { Languages } from '@/hooks/i18n'
import { createContext } from 'react'

export const LangContext = createContext<Languages | null>(null)

export function LangProvider({ children, lang }: { children: React.ReactNode; lang: Languages }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}
