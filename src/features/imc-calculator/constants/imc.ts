export const IMC_CATEGORIES = {
  LOW_WEIGHT: 'Bajo peso',
  NORMAL: 'Normal',
  OVERWEIGHT: 'Sobrepeso',
  OBESITY: 'Obeso',
} as const

export type IMC_CATEGORIES_TYPE = (typeof IMC_CATEGORIES)[keyof typeof IMC_CATEGORIES]

export const FORM_FIELDS = {
  altura: 'altura',
  peso: 'peso'
} as const

export const FORM_FIELD_ERRORS = {
  altura: {
    min: 'La altura debe ser mayor a 0m',
    max: 'La altura máxima es de 3m',
    required: 'La altura es requerida'
  },
  peso: {
    min: 'El peso debe ser mayor a 0kg',
    max: 'El peso máximo es de 500kg',
    required: 'El peso es requerido'
  }
}

export const IMC_LIMITS = {
  height: {
    min: 0,
    max: 3
  },
  weight: {
    min: 0.1,
    max: 500
  }
}