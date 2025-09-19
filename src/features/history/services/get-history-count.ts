import { env } from '@/lib/env'

type Response = {
  count: number
}

export async function getHistoryCountService(from?: string, to?: string): Promise<Response> {
  try {
    const backendUrl = env.backend.URL || 'http://localhost:3000'

    const historialApiUrl = new URL(`${backendUrl}/imc/historial-cantidad`)
    from && historialApiUrl.searchParams.set('desde', from)
    to && historialApiUrl.searchParams.set('hasta', to)

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
    return data as Response
  } catch {
    return { count: 0 }
  }
}