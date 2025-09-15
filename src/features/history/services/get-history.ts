import type { History } from '../types'

export async function getHistoryService(): Promise<History[]> {
  try {
    const response = await fetch('https://pa2025imcbackend-production.up.railway.app/imc/historial', {
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