'use client'
import React from 'react'

interface HistoryFiltersProps {
  desde: string
  hasta: string
  onDesdeChange: (value: string) => void
  onHastaChange: (value: string) => void
  onFilter: () => void
}

export const HistoryFilters: React.FC<HistoryFiltersProps> = ({
  desde,
  hasta,
  onDesdeChange,
  onHastaChange,
  onFilter
}) => {
  return (
    <div className="flex gap-4">
      <input
        type="date"
        value={desde}
        onChange={(e) => onDesdeChange(e.target.value)}
        className="p-2 rounded bg-input-black-bg text-white"
      />
      <input
        type="date"
        value={hasta}
        onChange={(e) => onHastaChange(e.target.value)}
        className="p-2 rounded bg-input-black-bg text-white"
      />
      <button
        onClick={onFilter}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
      >
        Filtrar
      </button>
    </div>
  )
}