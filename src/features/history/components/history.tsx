'use client'

import { ConditionalRender } from '@/components/conditional-render'
import { useHistory } from '../hooks/history'
import type { History as HistoryType } from '../types'
import { columns } from './columns'
import { DataTable } from './data-table'
import { useState } from 'react'

type HistoryProps = React.ComponentProps<'div'>

export const HistoryTable: React.FC<HistoryProps> = () => {
  // Estados para los filtros, se inicializan como cadenas vacías
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')

  // Se obtienen los datos de historial usando los filtros
  // Si desde o hasta son cadenas vacías, se pasan como undefined
  // para que el servicio los ignore
  const { data, isLoading } = useHistory(desde, hasta)

  return (
    <div className="space-y-4">
      {/* filtros */}
      <div className="flex gap-4">
        <input
          type="date"
          value={desde}
          onChange={(e) => setDesde(e.target.value)} // Sincroniza el estado con el input
          className="p-2 rounded bg-input-black-bg text-white"
        />
        <input
          type="date"
          value={hasta}
          onChange={(e) => setHasta(e.target.value)}
          className="p-2 rounded bg-input-black-bg text-white"
        />
      </div>

      {/* tabla o loader */}
      {isLoading ? (
        <div className="text-center text-white">Cargando...</div>
      ) : (
        <ConditionalRender condition={!(data?.length === 0)}>
          <DataTable columns={columns} data={data ?? ([] as HistoryType[])} />
        </ConditionalRender>
      )}
    </div>
  )
}
