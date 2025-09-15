'use client'

import { ConditionalRender } from '@/components/conditional-render'
import { useHistory } from '../hooks/history'
import type { History as HistoryType } from '../types'
import { columns } from './columns'
import { DataTable } from './data-table'

type HistoryProps = React.ComponentProps<'div'>

export const HistoryTable: React.FC<HistoryProps> = () => {
  const { data } = useHistory()

  return (
    <ConditionalRender condition={!(data?.length === 0)}>
      <DataTable columns={columns} data={data ?? ([] as HistoryType[])} />
    </ConditionalRender>
  )
}
