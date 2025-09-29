'use client'

import { Ring } from '@uiball/loaders'
import type React from 'react'
import { HistoryProvider, useHistory } from '../hooks/history'
import { columns } from './columns'
import { DataTable } from './data-table'
import { Filters } from './filters'
import IMCPagination from './imc-pagination'
import Dashboard from './despues-vemos'

type HistoryProps = React.ComponentProps<'div'>

export const HistoryTable: React.FC<HistoryProps> = () => {
  const { data, isLoading } = useHistory()
  const emptyTable = data?.items.length === 0

  const HistoryContentLoader = withLoading(HistoryContent)

  return (
    <HistoryProvider>
      <div className="space-y-4">
        <Filters />
        <HistoryContentLoader isLoading={isLoading} emptyTable={emptyTable} />
      </div>
    </HistoryProvider>
  )
}

const HistoryContent: React.FC<{ emptyTable: boolean }> = ({ emptyTable }) => {
  return (
    <>
      <DataTable columns={columns} />
      <IMCPagination paginationItemsToDisplay={5} />
      
      <Dashboard url="https://charts.mongodb.com/charts-imc-paqcduv/embed/dashboards?id=68d69a48-5e66-46d4-8f66-b9bd0d62511e&theme=dark&autoRefresh=true&maxDataAge=14400&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed" />
    </>
  )
}

function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: P & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props

    if (isLoading) {
      return (
        <div className="w-full flex justify-center pt-10">
          <Ring color="#eeeeee" size={20} />
        </div>
      )
    }

    return <WrappedComponent {...(rest as P)} />
  }
}
