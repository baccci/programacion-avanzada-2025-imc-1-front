import type { HISTORY_CATEGORIES } from '../constants/constants'

export type HistoryCategory = (typeof HISTORY_CATEGORIES)[keyof typeof HISTORY_CATEGORIES]

export type HistoryResponse = {
  items: History[]
  meta: Meta
  links: Links
}

export type History = {
  peso: number
  altura: number
  imc: number
  categoria: HistoryCategory
  fecha: string
}

export type Meta = {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

export type Links = {
  first: string
  previous: string
  next: string
  last: string
}