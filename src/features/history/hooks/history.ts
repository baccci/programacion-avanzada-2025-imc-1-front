import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { createContext } from '@/components/utils/create-context'
import { getHistoryService } from '../services/get-history'

export function useHistory() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  const historyQuery = useQuery({
    queryKey: ['history', { from, to, page }], // Cache keys
    queryFn: () => getHistoryService(from, to, page),
    placeholderData: keepPreviousData
  })

  return {
    ...historyQuery

  }
}

type HistoryContextValue = ReturnType<typeof useHistory>

export const [HistoryProvider, useHistoryContext] =
  createContext<HistoryContextValue>(() => useHistory())
