import type { History } from '../types'

export async function getHistoryService(desde?: string, hasta?: string): Promise<History[]> {
  try {
    const queryParams = []
    if (desde) queryParams.push(`desde=${desde}`)

    if (hasta) queryParams.push(`hasta=${hasta}`)
    
    const queryString = queryParams.length ? `?${queryParams.join('&')}` : ''

    // const response = await fetch(`https://pa2025imcbackend-production.up.railway.app/imc/historial${queryString}`, {
    const response = await fetch(`http://localhost:3000/imc/historial${queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
  } catch {
    return []
  }
}