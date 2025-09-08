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
    await sleep(1000)
    const heightInMeters = data.altura / 100
    return calcularImc({ ...data, altura: heightInMeters })

    /* return new Promise((resolve, reject) => {
      fetch('https://two025-proyecto1-back-imc-glr9.onrender.com/imc/calcular', {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(resolve)
        .catch(reject)
    }) */
  } catch {
    toast.error('Hubo un error al calcular el IMC')
  }
}

function calcularImc(data: IMCData): { imc: number; categoria: IMC_CATEGORIES_TYPE } {
  const { altura, peso } = data

  const imc = peso / (altura * altura)
  const imcRedondeado = Math.round(imc * 100) / 100 // Dos decimales

  if (imc < 18.5) {
    return { imc: imcRedondeado, categoria: IMC_CATEGORIES.LOW_WEIGHT }
  }

  if (imc < 25) {
    return { imc: imcRedondeado, categoria: IMC_CATEGORIES.NORMAL }
  }

  if (imc < 30) {
    return { imc: imcRedondeado, categoria: IMC_CATEGORIES.OVERWEIGHT }
  }

  return { imc: imcRedondeado, categoria: IMC_CATEGORIES.OBESITY }
}
