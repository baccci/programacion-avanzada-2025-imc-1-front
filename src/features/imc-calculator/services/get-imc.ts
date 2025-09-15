import { toast } from 'sonner'
import { sleep } from '@/utils/sleep'
import { IMC_CATEGORIES, type IMC_CATEGORIES_TYPE } from '../constants/imc'

export type IMCData = {
  altura: number
  peso: number
}

export type IMCResult = {
  imc: number
  categoria: IMC_CATEGORIES_TYPE
}

export async function getIMCService(
  data: IMCData
): Promise<IMCResult | undefined> {
  try {
    return new Promise((resolve, reject) => {
      fetch('https://pa2025imcbackend-production.up.railway.app/imc/calcular', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (!res.ok) {
            return reject("Error al calcular el IMC")
          }
          return res.json()
        })
        .then(resolve)
        .catch(reject)
    })
  } catch {
    toast.error('Hubo un error al calcular el IMC')
  }
}

