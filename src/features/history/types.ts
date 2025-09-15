import type { HISTORY_CATEGORIES } from './constants'

export type HistoryCategory = (typeof HISTORY_CATEGORIES)[keyof typeof HISTORY_CATEGORIES]

export type History = {
  peso: number
  altura: number
  imc: number
  categoria: HistoryCategory
  fecha: Date
}