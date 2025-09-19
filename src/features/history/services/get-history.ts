import { env } from '@/lib/env'
import type { HistoryResponse } from '../types/types'

export async function getHistoryService(from?: string | null, to?: string | null, page?: string | null): Promise<HistoryResponse> {
  try {
    const backendUrl = env.backend.URL || 'http://localhost:3000'

    const historialApiUrl = new URL(`${backendUrl}/imc/historial`)
    from && historialApiUrl.searchParams.set('desde', from)
    to && historialApiUrl.searchParams.set('hasta', to)
    historialApiUrl.searchParams.set('page', page || '1')

    const response = await fetch(historialApiUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch history')
    }

    const data = await response.json()
    return data as HistoryResponse
  } catch {
    throw new Error('Failed to fetch history')
  }
}