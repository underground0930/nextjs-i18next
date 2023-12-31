import { Languages } from '@/hooks/i18n'
import { createContext } from 'react'

export const LangContext = createContext<Languages | null>(null)
