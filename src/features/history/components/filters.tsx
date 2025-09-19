import { parseDate } from '@internationalized/date'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import type { DateValue } from 'react-aria-components'
import { Button } from '@/components/button'
import { IconFilter } from '@/components/icons/icon-filter'
import { Label } from '@/components/text-input/label'
import { cn } from '@/components/utils/taildwind-class-merge'
import { DATE_RANGE_FIELDS } from '../constants/constants'
import IMCDatePicker from './date-picker'

type FiltersProps = React.ComponentProps<'div'>
type DateRangeFields =
  (typeof DATE_RANGE_FIELDS)[keyof typeof DATE_RANGE_FIELDS]

export const Filters: React.FC<FiltersProps> = ({ className, ...props }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [from, setFrom] = React.useState('')
  const [to, setTo] = React.useState('')

  const queryFrom = searchParams.get('from')
  const fromDate = queryFrom ? parseDate(queryFrom) : null

  const queryTo = searchParams.get('to')
  const toDate = queryTo ? parseDate(queryTo) : null

  function handleFilter() {
    const queryParams = new URLSearchParams(window.location.search)
    queryParams.set('from', from)
    queryParams.set('to', to)
    router.push(`?${queryParams.toString()}`, { scroll: true })
  }

  const handleDatePickcerChange =
    (name: DateRangeFields) => (date: DateValue | null) => {
      if (!date) return
      const updateDateRange = {
        [DATE_RANGE_FIELDS.FROM]: setFrom,
        [DATE_RANGE_FIELDS.TO]: setTo
      }[name]

      const dateMonth = date.month.toString().padStart(2, '0')
      const dateDay = date.day.toString().padStart(2, '0')
      const dateString = `${date.year}-${dateMonth}-${dateDay}`
      updateDateRange(dateString)
    }

  return (
    <div
      className={cn(
        'rounded-[25px] bg-[#364161]/75 backdrop-blur-3xl text-input-white p-[1px]',
        className
      )}
      {...props}
    >
      <div className="flex gap-2 px-4 py-3 rounded-3xl bg-dark items-end">
        <div className="flex flex-col gap-1 pt-1">
          <Label className="text-xs">Desde</Label>
          <IMCDatePicker
            aria-label="Fecha de inicio"
            onChange={handleDatePickcerChange(DATE_RANGE_FIELDS.FROM)}
            defaultValue={fromDate}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label className="text-xs">Hasta</Label>
          <IMCDatePicker
            aria-label="Fecha de fin"
            onChange={handleDatePickcerChange(DATE_RANGE_FIELDS.TO)}
            defaultValue={toDate}
          />
        </div>

        <Button
          onClick={handleFilter}
          className="ml-auto bg-jordy-blue-600 hover:bg-jordy-blue-700 flex items-center gap-1"
        >
          <IconFilter width={16} /> Filtrar
        </Button>
      </div>
    </div>
  )
}
