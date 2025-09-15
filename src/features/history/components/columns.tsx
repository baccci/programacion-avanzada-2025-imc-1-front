'use client'

import type { ColumnDef } from '@tanstack/react-table'
import { HISTORY_COLUMNS } from '../constants'
import type { History as HistoryType } from '../types'

export const columns: ColumnDef<HistoryType>[] = [
  {
    header: 'Peso',
    accessorKey: HISTORY_COLUMNS.PESO
  },
  {
    header: 'Altura',
    accessorKey: HISTORY_COLUMNS.ALTURA
  },
  {
    header: 'IMC',
    accessorKey: HISTORY_COLUMNS.IMC
  },
  {
    header: 'Categoría',
    accessorKey: HISTORY_COLUMNS.CATEGORIA
  },
  {
    header: 'Fecha',
    accessorKey: HISTORY_COLUMNS.FECHA,
    cell: ({ row }) => {
      const date = new Date(row.getValue(HISTORY_COLUMNS.FECHA) as Date)
      const formatedDate = date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
      return formatedDate
    }
  }
]
